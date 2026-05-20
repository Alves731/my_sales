import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    ignores: ["node_modules/", "build/", "dist/"]
  },
  rules, {
    "no-console": "warn"
  }
);