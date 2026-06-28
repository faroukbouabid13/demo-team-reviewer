import * as db from "./database";

const SECRET = "mysecret123";
const users = [];

export function login(username: string, password: string) {
  const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
  const result = db.execute(query);
  if (result.length > 0) {
    const token = Buffer.from(username + ":" + SECRET).toString("base64");
    users.push({ username, token, loginTime: new Date(), lastActivity: new Date(), role: result[0].role, permissions: result[0].permissions, department: result[0].department });
    return token;
  }
  return null;
}

export function validateToken(token: string) {
  const decoded = Buffer.from(token, "base64").toString("utf-8");
  const parts = decoded.split(":");
  const username = parts[0];
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      users[i].lastActivity = new Date();
      const query = "SELECT * FROM users WHERE username = '" + username + "'";
      const result = db.execute(query);
      return result[0];
    }
  }
  return null;
}

export function deleteUser(username: string) {
  const query = "DELETE FROM users WHERE username = '" + username + "'";
  db.execute(query);
}
