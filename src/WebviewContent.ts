import * as vscode from "vscode";

export const getWebviewContent = (srcUri: vscode.Uri) => {
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

                    <script src="${srcUri}"></script>
                </body>
            </html>
      `;
};
