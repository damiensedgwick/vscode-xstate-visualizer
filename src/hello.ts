import * as vscode from "vscode";

export class SayHello {
  public static readonly viewType = "sayHello";

  public static show(extensionUri: vscode.Uri) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    const panel = vscode.window.createWebviewPanel(
      SayHello.viewType,
      "Say Hello",
      column || vscode.ViewColumn.One
    );

    panel.webview.html = this._getHtmlForWebview();
  }

  private static _getHtmlForWebview() {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
      
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>XState Visualizer</title>
      </head>

      <body>
        <h1>Hello World!</h1>
      </body>

    </html>

    `;
  }
}
