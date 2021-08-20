import * as vscode from "vscode";
import * as path from "path";

export const getWebviewContent = (extensionPath: string) => {
  const reactAppPathOnDisk = vscode.Uri.file(
    path.join(extensionPath, "app.js") // FIGURE THE CORRECT PATH OUT
  );

  const reactAppUri = reactAppPathOnDisk.with({ scheme: "vscode-resource" });

  console.log(reactAppPathOnDisk);
  console.log(reactAppUri);

  return `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="Content-Security-Policy" content="default-src * 'unsafe-inline' 'unsafe-eval'" >
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
