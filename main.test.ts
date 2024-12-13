// the test is using jest and nodejs
// visit https://jestjs.io/docs/en/getting-started for details
// install all dependencies using `npm install`
// type `npm test` in the terminal to run the test
// kindly check the code and mockdata for the test

import {
  revenue,
  expenses,
  grossProfitMargin,
  netProfitMargin,
  workingCapitalRatio,
} from "./lib/functions";
import { formatCurrency, formatPercentage } from "./lib/utils";
import { JsonData } from "./types/types";

// Sample data for testing
const mockData: JsonData[] = [
  {
    account_category: "revenue",
    account_code: "RC1000",
    account_currency: "AUD",
    account_identifier: "REV001",
    account_status: "active",
    value_type: "credit",
    account_name: "Revenue Account 1",
    account_type: "revenue",
    account_type_bank: "none",
    system_account: "general",
    total_value: 1000,
  },
  {
    account_category: "revenue",
    account_code: "RC2000",
    account_currency: "AUD",
    account_identifier: "REV002",
    account_status: "active",
    value_type: "credit",
    account_name: "Revenue Account 2",
    account_type: "revenue",
    account_type_bank: "none",
    system_account: "general",
    total_value: 2000,
  },
  {
    account_category: "expense",
    account_code: "EX500",
    account_currency: "AUD",
    account_identifier: "EXP001",
    account_status: "active",
    value_type: "debit",
    account_name: "Expense Account 1",
    account_type: "expense",
    account_type_bank: "none",
    system_account: "general",
    total_value: 500,
  },
  {
    account_category: "expense",
    account_code: "EX300",
    account_currency: "AUD",
    account_identifier: "EXP002",
    account_status: "active",
    value_type: "debit",
    account_name: "Expense Account 2",
    account_type: "expense",
    account_type_bank: "none",
    system_account: "general",
    total_value: 300,
  },
  {
    account_category: "assets",
    account_code: "AS1500",
    account_currency: "AUD",
    account_identifier: "AST001",
    account_status: "active",
    value_type: "debit",
    account_name: "Asset Account 1",
    account_type: "current",
    account_type_bank: "none",
    system_account: "general",
    total_value: 1500,
  },
  {
    account_category: "assets",
    account_code: "AS200",
    account_currency: "AUD",
    account_identifier: "AST002",
    account_status: "active",
    value_type: "credit",
    account_name: "Asset Account 2",
    account_type: "current",
    account_type_bank: "none",
    system_account: "general",
    total_value: 200,
  },
  {
    account_category: "liability",
    account_code: "LB100",
    account_currency: "AUD",
    account_identifier: "LBT001",
    account_status: "active",
    value_type: "debit",
    account_name: "Liability Account 1",
    account_type: "current",
    account_type_bank: "none",
    system_account: "general",
    total_value: 100,
  },
  {
    account_category: "liability",
    account_code: "LB300",
    account_currency: "AUD",
    account_identifier: "LBT002",
    account_status: "active",
    value_type: "credit",
    account_name: "Liability Account 2",
    account_type: "current",
    account_type_bank: "none",
    system_account: "general",
    total_value: 300,
  },
];

describe("Financial Calculations", () => {
  test("Calculates revenue correctly", () => {
    const expectedRevenue = 3000;
    expect(revenue(mockData)).toBe(expectedRevenue);
  });

  test("Calculates expenses correctly", () => {
    const expectedExpenses = 800;
    expect(expenses(mockData)).toBe(expectedExpenses);
  });

  test("Calculates gross profit margin correctly", () => {
    const salesDebit = 0;
    const expectedGrossProfitMargin = (salesDebit / 3000) * 100;
    expect(grossProfitMargin(mockData)).toBeCloseTo(expectedGrossProfitMargin);
  });

  test("Calculates net profit margin correctly", () => {
    const expectedNetProfitMargin = (3000 - 800) / 3000; // Net Profit Margin = (Revenue - Expenses) / Revenue
    expect(netProfitMargin(mockData)).toBeCloseTo(expectedNetProfitMargin);
  });

  test("Calculates working capital ratio correctly", () => {
    const assets = 1500 - 200; // Assets = Assets Debit - Assets Credit
    const liabilities = 300 - 100; // Liabilities = Liabilities Credit - Liabilities Debit
    const expectedWorkingCapitalRatio = assets / liabilities;
    expect(workingCapitalRatio(mockData)).toBeCloseTo(
      expectedWorkingCapitalRatio
    );
  });
});

describe("Currency Formatting", () => {
  test("formats revenue correctly", () => {
    const expectedRevenue = "$3,000";
    expect(formatCurrency(revenue(mockData))).toBe(expectedRevenue);
  });

  test("Formats expenses correctly", () => {
    const expectedExpenses = "$800";
    expect(formatCurrency(expenses(mockData))).toBe(expectedExpenses);
  });
});

describe("Percentage Formatting", () => {
  test("Formats gross profit margin correctly", () => {
    const expectedGrossProfitMargin = "0.0%";
    expect(formatPercentage(0)).toBe(expectedGrossProfitMargin);
  });

  test("Formats net profit margin correctly", () => {
    const expectedNetProfitMargin = "73.3%";
    expect(formatPercentage(0.7333)).toBe(expectedNetProfitMargin);
  });

  test("Formats working capital ratio correctly", () => {
    const expectedWorkingCapitalRatio = "650.0%";
    expect(formatPercentage(6.5)).toBe(expectedWorkingCapitalRatio);
  });
});
