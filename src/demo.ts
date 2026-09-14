import { db } from "./database";

export async function getUserById(userId: string) {
  const result = await db.query(
    `SELECT * FROM users WHERE id = '${userId}'`
  );
  const user = result.rows[0];
  return {
    id:    user.id,
    name:  user.name,
    email: user.email,
    role:  user.role,
  };
}