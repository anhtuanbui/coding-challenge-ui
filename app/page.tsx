"use client"

import { expenses, grossProfitMargin, netProfitMargin, revenue, workingCapitalRatio } from "@/lib/functions";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import { JsonData } from "@/types/types";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

export default function Home() {
  const [jsonData, setJsonData] = useState<JsonData[]>([]);
  const [textareaInput, setTextareaInput] = useState("");
  const [errorOutput, setErrorOutput] = useState("");

  const onSubmit = () => {
    let data;

    try {
      data = JSON.parse(textareaInput);
    } catch (error) {
      setErrorOutput("Invalid JSON. Can not parse data");
      console.error(error);
    }

    if (data && data.data) {
      setJsonData(data.data);
      setErrorOutput("");
    } else if (data) {
      setJsonData(data);
      setErrorOutput("");
    } else {
      setErrorOutput("Invalid JSON");
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaInput(e.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        setJsonData(data.data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    fetchData();
  }, []);

  if (jsonData.length === 0) {
    return (
      <main className="bg-gray-900 h-screen flex items-center justify-center text-center">
        <div className="text-white text-xl">Loading data...</div>
      </main>
    );
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
          <h2 className="text-base sm:text-4xl font-bold text-orange-600 mt-2 sm:mt-8">Caculate 5 common accounting metrics</h2>
          <table className="mt-1 sm:mt-4 border-separate sm:border-spacing-2 text-sm sm:text-2xl">
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

          <Dialog>
            <DialogTrigger className="mt-2 sm:mt-10 text-xs sm:text-base bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 sm:px-6 rounded">Change Data</DialogTrigger>
            <DialogContent>
              <DialogHeader className="text-left">
                <DialogTitle>Change Data</DialogTitle>
                <DialogDescription>
                  Use your data for caculation
                </DialogDescription>
              </DialogHeader>
              <textarea name="input" id="input" className="w-full h-40 p-2 border border-gray-300" onChange={handleTextareaChange}></textarea>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <button className="text-xs sm:text-base bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 sm:px-6 rounded" onClick={onSubmit}>Submit</button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <p className="text-red-500 mt-4">{errorOutput}</p>
        </div>
      </main>
      <footer className="bg-gray-900 p-10 flex items-center justify-center">
        <p className="text-white text-sm sm:text-base">Programmed by <a className="text-orange-600" href="https://www.linkedin.com/in/anhtuan-bui/">Anh Tuan Bui</a></p>
      </footer>
    </>

  );
}
