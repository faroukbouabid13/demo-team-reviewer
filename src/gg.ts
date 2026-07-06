<<<<<<< HEAD
export function log(message: string): void {
  console.log(`[${new Date().toISOString()}] ${message}`);
}

export function logError(message: string): void {
  console.error(`[${new Date().toISOString()}] ERROR: ${message}`);
}
=======
export function log(message: string): void {
  console.log(`[INFO] ${message}`);
}

export function logError(message: string): void {
  console.error(`[ERROR] ${message}`);
}
>>>>>>> ca39907 (feat: add gg)
