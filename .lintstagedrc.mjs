import path from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const config = {
  "*.{js,jsx,ts,tsx}": [
    () => "npm run type:check",
    buildEslintCommand,
    "npm run format",
  ],
};

export default config;
