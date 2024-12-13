import { expenses, grossProfitMargin, netProfitMargin, revenue, workingCapitalRatio } from "@/lib/functions";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import fs from "fs";
export default function Home() {
  let jsonData;

  try {
    const data = fs.readFileSync("data/data.json", "utf8");
    jsonData = JSON.parse(data).data;
  } catch (error) {
    console.error("Data file is not found");
    console.error(error);
  }

  const tableValues = [
    {
      label: "Revenue",
      value: formatCurrency(revenue(jsonData)),
    },
    {
      label: "Expenses",
      value: formatCurrency(expenses(jsonData)),
    },
    {
      label: "Gross Profit Margin",
      value: formatPercentage(grossProfitMargin(jsonData)),
    },
    {
      label: "Net Profit Margin",
      value: formatPercentage(netProfitMargin(jsonData)),
    },
    {
      label: "Working Capital Ratio",
      value: formatPercentage(workingCapitalRatio(jsonData)),
    },
  ]

  return (
    <>
      <main className="bg-gray-900 h-screen flex items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-xl sm:text-5xl font-bold text-gray-400">Coding Challenge</h1>
          <h2 className="text-base sm:text-4xl font-bold text-orange-600 mt-8">Caculate 5 common accounting metrics</h2>
          <table className="mt-4 border-separate sm:border-spacing-2 text-sm sm:text-2xl">
            <tbody>
              {tableValues.map((value, index) => (
                <tr key={index}>
                  <td className="text-green-600 text-left">{value.label}</td>
                  <td className="text-green-600"> : </td>
                  <td className="text-yellow-600 text-left">{value.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
      <footer className="bg-gray-900 p-10 flex items-center justify-center">
        <p className="text-white text-sm sm:text-base">Programmed by <a className="text-orange-600" href="https://www.linkedin.com/in/anhtuan-bui/">Anh Tuan Bui</a></p>
      </footer>
    </>

  );
}
