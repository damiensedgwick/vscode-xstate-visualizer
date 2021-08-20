import * as vscode from "vscode";
import * as path from "path";

export const getWebviewContent = () => {
  const reactAppPathOnDisk = vscode.Uri.file(
    path.join(vscode.env.appRoot, "app", "src/app.js")
  );

  const reactAppUri = reactAppPathOnDisk.with({ scheme: "vscode-resource" });

  return `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>XState Visualizer</title>

                    <script>
                        window.acquireVsCodeApi = acquireVsCodeApi;
                    </script>
                </head>

                <body>
                    <div id="root"></div>

                    <script src="${reactAppUri}"></script>
                </body>
            </html>
      `;
};
