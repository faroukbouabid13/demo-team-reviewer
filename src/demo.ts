export async function deleteUser(userId: string) {
  try {
    const result = await db.query(
      "DELETE FROM users WHERE id = $1",
      [userId]
    );
    return result.rowCount > 0;
  } catch (err) {
    console.error("[deleteUser] error:", err);
    throw err;
  }
}
export async function listUsers(): Promise<User[]> {
  try {
    const result = await db.query("SELECT * FROM users ORDER BY created_at DESC");
    return result.rows ?? [];
  } catch (err) {
    console.error("[listUsers] error:", err);
    throw err;
  }
}