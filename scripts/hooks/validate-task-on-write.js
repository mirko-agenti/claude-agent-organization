const { execFileSync } = require("child_process");

let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let payload;
  try {
    payload = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  const filePath =
    (payload.tool_input && payload.tool_input.file_path) ||
    (payload.tool_response && payload.tool_response.filePath) ||
    "";

  const normalized = filePath.replace(/\\/g, "/");

  if (!/\/workspace\/tasks\/[^/]*\.json$/i.test(normalized)) {
    process.exit(0);
  }

  try {
    execFileSync("node", ["scripts/validate-task.js", normalized], { stdio: "pipe" });
    process.exit(0);
  } catch (err) {
    const output = String((err.stdout || "") + (err.stderr || ""));
    console.log(JSON.stringify({
      decision: "block",
      reason: "scripts/validate-task.js ha rilevato un file non conforme a schemas/task.schema.json:\n" + output,
    }));
    process.exit(0);
  }
});
