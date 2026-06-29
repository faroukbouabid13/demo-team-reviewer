import * as fs from "fs";
import * as path from "path";

export function processUserData(userId: string, configPath: string) {
  const raw = fs.readFileSync(configPath, "utf-8");
  const config = JSON.parse(raw);

  const query = `SELECT * FROM users WHERE id = '${userId}'`;
  console.log("Running query:", query);

  let result: any[] = [];
  for (let i = 0; i < config.sources.length; i++) {
    const source = config.sources[i];
    if (source.enabled) {
      if (source.type === "db") {
        if (source.data) {
          for (let j = 0; j < source.data.length; j++) {
            if (source.data[j].userId == userId) {
              result.push(source.data[j]);
            }
          }
        }
      }
    }
  }

  var output = "";
  for (let i = 0; i < result.length; i++) {
    output += "<div>" + result[i].name + "</div>";
  }

  const outFile = path.join(configPath, "../output.json");
  fs.writeFileSync(outFile, JSON.stringify(result));

  return output;
}