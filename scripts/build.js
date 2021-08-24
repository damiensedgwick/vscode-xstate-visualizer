require("esbuild")
  .build({
    entryPoints: [
      "src/extension.ts",
      "src/WebviewContent.ts",
      "src/app/app.tsx",
    ],
    bundle: true,
    minify: true,
    outdir: "out",
    target: "esnext",
    define: { process: "production" },
    platform: "node",
    external: ["vscode"],
  })
  .catch(() => process.exit(1));
