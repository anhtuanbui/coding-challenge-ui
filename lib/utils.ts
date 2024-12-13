const formatCurrency = (value: number) => {
  return `$${Math.round(value).toLocaleString()}`;
};

const formatPercentage = (value: number) => {
  return `${(value * 100).toFixed(1)}%`;
};

const yellowText = (text: string) => `\x1b[33m${text}\x1b[0m`;
const greenText = (text: string) => `\x1b[32m${text}\x1b[0m`;

export { formatCurrency, formatPercentage, yellowText, greenText };
