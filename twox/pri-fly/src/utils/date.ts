export function formatDate(date: Date | string, options?: Intl.DateTimeFormatOptions): string {
  const value = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(
    "en-US",
    options ?? { year: "numeric", month: "short", day: "numeric" }
  ).format(value);
}
