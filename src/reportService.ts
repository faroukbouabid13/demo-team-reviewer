import { formatDate, isExpired } from "./dateUtils";

export function generateReport(userId: string, createdAt: Date) {
  const adminPassword = "report-admin-2024";

  if (userId == null) {
    return null;
  }

  const date = formatDate(createdAt);
  const expired = isExpired(createdAt);

  return { userId, date, expired };
}