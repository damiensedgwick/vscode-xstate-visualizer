import * as vscode from "vscode";

import { sayHello } from "./hello";

export function activate(ctx: vscode.ExtensionContext) {
  sayHello(ctx);
}

export function deactivate() {}
