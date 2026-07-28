let input = "";
process.stdin.on("data", (chunk) => (input += chunk));
process.stdin.on("end", () => {
  let payload;
  try {
    payload = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  const filePath = (payload.tool_input && payload.tool_input.file_path) || "";
  const normalized = filePath.replace(/\\/g, "/");

  if (/\/workspace\/approved\//i.test(normalized)) {
    console.log(JSON.stringify({
      hookSpecificOutput: {
        hookEventName: "PreToolUse",
        permissionDecision: "deny",
        permissionDecisionReason:
          "workspace/approved/ non può essere scritto direttamente da Write o Edit: lo spostamento richiede l'esplicita approvazione dell'Human Owner (vedi GOVERNANCE.md e governed-workflow skill).",
      },
    }));
  }
  process.exit(0);
});
