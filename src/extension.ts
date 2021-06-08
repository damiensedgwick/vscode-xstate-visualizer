import * as vscode from "vscode";

import { getWebviewContent } from "./WebviewContent";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("xstviz.visualizer", () => {
    let panel = vscode.window.createWebviewPanel(
      "visualizer",
      "Xstate Visualizer",
      vscode.ViewColumn.One,
      { enableScripts: true, retainContextWhenHidden: true }
    );

    panel.webview.html = getWebviewContent();
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
