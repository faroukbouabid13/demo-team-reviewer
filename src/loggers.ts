export function log(message: string): void {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

export function logError(message: string): void {
  console.error(`[${new Date().toISOString()}] ERROR: ${message}`);
}
export function logErrors(message: string): void {
  console.error(`[${new Date().toISOString()}] ERROR: ${message}`);
}
