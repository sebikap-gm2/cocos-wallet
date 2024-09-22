interface FormatCurrencyConfig {
  value: number | string;
  locale?: Intl.LocalesArgument;
  currency?: string;
  shorten?: boolean;
}

/**
 * Formats a number or string as currency and optionally shortens it.
 *
 * @param {Object} options - The options for formatting.
 * @param {number|string} options.value - The value to format.
 * @param {string} options.locale - The locale to use (e.g., 'en-US').
 * @param {string} options.currency - The currency code (e.g., 'USD', 'EUR').
 * @param {boolean} [options.shorten=false] - Whether to shorten the number (e.g., '1M' instead of '1,000,000').
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency({
  value,
  locale = "en-US",
  currency = "USD",
  shorten = false,
}: FormatCurrencyConfig): string {
  const numericValue = typeof value === "string" ? parseFloat(value) : value;

  if (isNaN(numericValue)) {
    throw new Error("Invalid value provided for currency formatting");
  }

  const shortenNumber = (num: number) => {
    if (num >= 1e9) return [(num / 1e9).toFixed(0), "B"];
    if (num >= 1e6) return [(num / 1e6).toFixed(0), "M"];
    if (num >= 1e3) return [(num / 1e3).toFixed(0), "K"];
    return [num.toFixed(1)];
  };

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: shorten ? 0 : 2,
  });

  if (shorten) {
    const shortInfo = shortenNumber(numericValue);
    const value = parseFloat(shortInfo[0]);
    const formattedValue = formatter.format(Math.round(value));
    const n = shortInfo[1];
    return Boolean(n) ? `${formattedValue} ${n}` : formattedValue;
  }

  return formatter.format(numericValue);
}
