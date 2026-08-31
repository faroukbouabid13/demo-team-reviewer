export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export function capitalize(str: string): string {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}
