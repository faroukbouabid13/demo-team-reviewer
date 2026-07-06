export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US");
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}