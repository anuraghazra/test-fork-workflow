const fs = require("fs");

require("dotenv").config();

console.log('HAS_VERCEL_PRO', process.env.HAS_VERCEL_PRO);
if (process.env.HAS_VERCEL_PRO === "false") return;

const vercelFile = "./vercel.json";
const vercelJsonContent = fs.readFileSync(vercelFile, "utf-8");

const updated = vercelJsonContent.replace(
  `10`,
  `30`
);

fs.writeFileSync(vercelFile, updated, "utf-8");

console.log(fs.readFileSync(vercelFile, "utf-8"))