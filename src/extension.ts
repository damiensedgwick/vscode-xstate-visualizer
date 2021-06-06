import * as vscode from "vscode";

import { SayHello } from "./hello";

export function activate(ctx: vscode.ExtensionContext) {
  ctx.subscriptions.push(
    vscode.commands.registerCommand("xstate-visualizer.sayHello", () => {
      SayHello.show(ctx.extensionUri);
    })
  );
}

export function deactivate() {}
