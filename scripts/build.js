require("esbuild")
  .build({
    entryPoints: ["src/extension.ts", "src/app/src/index.tsx"],
    bundle: true,
    minify: true,
    outdir: "out",
    target: ["es2020", "node14"],
    define: { "process.env.NODE_ENV": "'production'" },
    platform: "node",
    external: ["vscode"],
  })
  .catch(() => process.exit(1));
