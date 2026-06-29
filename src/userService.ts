export function calculateDiscount(price: number, percentage: number): number {
  if (price < 0 || percentage < 0 || percentage > 100) {
    throw new Error("Invalid price or percentage");
  }
  return Math.round(price * (1 - percentage / 100) * 100) / 100;
}