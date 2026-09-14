import { db } from "./database";

interface User {
  id:    string;
  name:  string;
  email: string;
  role:  string;
}

/**
 * Retrieves a user by their ID.
 * @param userId - The unique identifier of the user
 * @returns The user object, or null if not found
 */
export async function getUserById(userId: string): Promise<User | null> {
  if (!userId) { return null; }

  try {
    const result = await db.query<User>(
      "SELECT id, name, email, role FROM users WHERE id = $1",
      [userId]
    );

    const user = result.rows[0];
    if (!user) { return null; }

    return {
      id:    user.id,
      name:  user.name,
      email: user.email,
      role:  user.role,
    };
  } catch (err) {
    console.error("[getUserById] database error:", err);
    throw err;
  }
}