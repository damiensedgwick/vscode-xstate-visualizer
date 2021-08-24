import * as vscode from "vscode";
import * as path from "path";

import { getWebviewContent } from "./WebviewContent";

export function activate(context: vscode.ExtensionContext) {
  // Only allow a XState Visualiser
  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  const reactAppPathOnDisk = vscode.Uri.file(
    path.join(context.extensionPath, "out", "app", "app.js")
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
