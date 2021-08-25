import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
  // Only allow a XState Visualiser
  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  const reactAppPathOnDisk = vscode.Uri.file(
    path.join(context.extensionPath, "out", "app", "src", "index.js")
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("xstviz.visualizer", () => {
      if (currentPanel) {
        currentPanel.reveal(vscode.ViewColumn.One);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          "visualizer",
          "Xstate Visualizer",
          vscode.ViewColumn.One,
          {
            enableScripts: true,
            retainContextWhenHidden: true,
          }
        );

        const srcUri = currentPanel.webview.asWebviewUri(reactAppPathOnDisk);

        currentPanel.webview.html = getWebviewContent(srcUri);

        // Handle disposing the current XState Visualizer
        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          undefined,
          context.subscriptions
        );
      }
    })
  );
}

export function deactivate() {}

const getWebviewContent = (srcUri: vscode.Uri) => {
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

                    <script type="module" src="${srcUri}"></script>
                </body>
            </html>
      `;
};
