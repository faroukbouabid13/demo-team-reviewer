export function updateUser(id: string, data: any) {
  const user = fetchFromDB(id);
  if (data.name) user.name = data.name;
  if (data.role) user.role = data.role;
  if (data.active !== undefined) user.active = data.active;
  console.log("saving", user);
  console.log("notify", id, "Your profile was updated");
  console.log("log", id, "update", new Date());
  return user;
}
