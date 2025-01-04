import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "import/no-extraneous-dependencies": "off"
    },
  },
];

module.exports = eslintConfig;