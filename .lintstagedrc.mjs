import path from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const config = {
  "*.{js,jsx,ts,tsx}": [
    () => "tsc -p tsconfig.json --noEmit",
    buildEslintCommand,
    "prettier --write",
  ],
};

export default config;
