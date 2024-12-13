# Solution to Coding Challenge

This repository is the solution for the [coding challenge](https://github.com/rewardpay/coding-challenge)

This solution uses NextJS, TailWind CSS, Shadcn UI, and TypeScripts to create the front-end which is responsive.

For a simpler solution with JavaScript check out [Coding Challenge Solution](https://github.com/anhtuanbui/coding-challenge/tree/master)

This version 2 adds extra coding experience to the solution.

The default output of the solution should be:
```
Revenue: $32,431
Expenses: $36,530
Gross Profit Margin: 0.0%
Net Profit Margin: -12.6%
Working Capital Ratio: 118.8%
```

## Check out the solution

The solution is now interactable using UI at [Coding Challenge Solution Version 2](https://coding-challenge-ui.vercel.app/)

Try *Change Data* for testing.

- Click `Change Data`
- Add below sample mock data in the input of the pop-up dialog
- Click `Submit` to see the result

<details>

<summary>Sample Mock Data</summary>

```
[
  {
    "account_category": "revenue",
    "account_code": "RC1000",
    "account_currency": "AUD",
    "account_identifier": "REV001",
    "account_status": "active",
    "value_type": "credit",
    "account_name": "Revenue Account 1",
    "account_type": "revenue",
    "account_type_bank": "none",
    "system_account": "general",
    "total_value": 1000
  },
  {
    "account_category": "revenue",
    "account_code": "RC2000",
    "account_currency": "AUD",
    "account_identifier": "REV002",
    "account_status": "active",
    "value_type": "credit",
    "account_name": "Revenue Account 2",
    "account_type": "revenue",
    "account_type_bank": "none",
    "system_account": "general",
    "total_value": 2000
  },
  {
    "account_category": "expense",
    "account_code": "EX500",
    "account_currency": "AUD",
    "account_identifier": "EXP001",
    "account_status": "active",
    "value_type": "debit",
    "account_name": "Expense Account 1",
    "account_type": "expense",
    "account_type_bank": "none",
    "system_account": "general",
    "total_value": 500
  },
  {
    "account_category": "expense",
    "account_code": "EX300",
    "account_currency": "AUD",
    "account_identifier": "EXP002",
    "account_status": "active",
    "value_type": "debit",
    "account_name": "Expense Account 2",
    "account_type": "expense",
    "account_type_bank": "none",
    "system_account": "general",
    "total_value": 300
  },
  {
    "account_category": "assets",
    "account_code": "AS1500",
    "account_currency": "AUD",
    "account_identifier": "AST001",
    "account_status": "active",
    "value_type": "debit",
    "account_name": "Asset Account 1",
    "account_type": "current",
    "account_type_bank": "none",
    "system_account": "general",
    "total_value": 1500
  },
  {
    "account_category": "assets",
    "account_code": "AS200",
    "account_currency": "AUD",
    "account_identifier": "AST002",
    "account_status": "active",
    "value_type": "credit",
    "account_name": "Asset Account 2",
    "account_type": "current",
    "account_type_bank": "none",
    "system_account": "general",
    "total_value": 200
  },
  {
    "account_category": "liability",
    "account_code": "LB100",
    "account_currency": "AUD",
    "account_identifier": "LBT001",
    "account_status": "active",
    "value_type": "debit",
    "account_name": "Liability Account 1",
    "account_type": "current",
    "account_type_bank": "none",
    "system_account": "general",
    "total_value": 100
  },
  {
    "account_category": "liability",
    "account_code": "LB300",
    "account_currency": "AUD",
    "account_identifier": "LBT002",
    "account_status": "active",
    "value_type": "credit",
    "account_name": "Liability Account 2",
    "account_type": "current",
    "account_type_bank": "none",
    "system_account": "general",
    "total_value": 300
  }
]
```
</details>

*The result should show:*
```
Revenue: $3,000
Expenses: $800
Gross Profit Margin: 0.0%
Net Profit Margin: 73.3%
Working Capital Ratio: 650.0%
```


## Test the app with terminal

- Clone the app using terminal and git at https://github.com/anhtuanbui/coding-challenge-ui. Check [clone app helper](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) for details.
- Open the app folder in the terminal or cmd
  * Type ```npm run dev``` for testing the UI
  * Type ```npm run main``` for testing it using the terminal
  * Type ```npm run test``` for testing functions results
- On UI and terminal results should show as follows:
```
Revenue: $32,431
Expenses: $36,530
Gross Profit Margin: 0.0%
Net Profit Margin: -12.6%
Working Capital Ratio: 118.8%
```

