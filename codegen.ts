import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: "src/app/**/_lib/*.ts",
  generates: {
    "src/types/__generated__/globalTypes.ts": {
      plugins: ["typescript"],
    },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        // fileName: "types",
        baseTypesPath: "types/__generated__/globalTypes.ts",
        folder: "types/__generated__",
        extension: ".types.ts",
      },
      plugins: ["typescript-operations"],
    },
  },
};

export default config;

/*
    Can choose either  fileName or extension in presetConfig.
    If extension - "Types.ts" will generate queriesTypes.ts, mutationsTypes.ts etc
    If extension - can do ".types.ts" will generate queries.types.ts, mutations.types.ts etc
    If fileName - "types" will only generate single types.generated.ts file containing all queries, mutations etc
*/
