const fs = require("fs");
const Ajv = require("ajv/dist/2020");
const addFormats = require("ajv-formats");

const schema = JSON.parse(
  fs.readFileSync("./schemas/task.schema.json", "utf8")
);

const filePath = process.argv[2];

if (!filePath) {
  console.error("Inserire il percorso del file task da validare");
  process.exit(1);
}

const data = JSON.parse(
  fs.readFileSync(filePath, "utf8")
);

const ajv = new Ajv({ allErrors: true });

addFormats(ajv);

const validate = ajv.compile(schema);

const valid = validate(data);

if (valid) {
  console.log(`VALID: ${filePath}`);
  process.exit(0);
} else {
  console.error("INVALID:");
  console.error(validate.errors);
  process.exit(1);
}