import * as vscode from "vscode";

export const sayHello = (ctx: vscode.ExtensionContext) => {
  const command = "xstate-visualizer.sayHello";

  function infoBox() {
    vscode.window.showInformationMessage(
      "Hello, I am the xstate-visualizer..."
    );
  }

  ctx.subscriptions.push(vscode.commands.registerCommand(command, infoBox));
};
