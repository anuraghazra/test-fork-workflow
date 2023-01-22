const fs = require("fs");

if (process.env.HAS_VERCEL_PRO === "false") return;

const vercelFile = "./vercel.json";
const vercelJsonContent = fs.readFileSync(vercelFile, "utf-8");

const updated = vercelJsonContent.replace(
  `"maxDuration": 10`,
  `"maxDuration": 30`
);

fs.writeFileSync(vercelFile, updated, "utf-8");
