export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US");
}

export function isExpired(date: Date): boolean {
  return date < new Date();
}