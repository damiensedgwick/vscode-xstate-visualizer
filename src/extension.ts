// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "xstviz" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand("xstviz.helloWorld", () => {
    // The code you place here will be executed every time your command is executed

    // Display a message box to the user
    // vscode.window.showInformationMessage("Hello World from xstviz!");

    let panel = vscode.window.createWebviewPanel(
      "visualizer",
      "Xstate Visualizer",
      vscode.ViewColumn.One,
      { enableScripts: true }
    );

    panel.webview.html = getWebviewContent();
  });

  context.subscriptions.push(disposable);
}

// get webview content
function getWebviewContent() {
  return `
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>XState Visualizer</title>
				<style>
				* {
					
				}
				
				body {
					padding: 0;
					margin: 0;
					box-sizing: border-box;
					height: calc(100vh - 5px);
					width: calc(100vw - 10px);
					margin: auto;
				}
				.iframe-wrapper {
					height: 100%;
					width: 100%;
				}
				.iframe {
					height: 100%;
					width: 100%;
				}
				
				</style>
			</head>
			
			<body>
				
				<div class="iframe-wrapper">
					<iframe class="iframe" src="https://xstate.js.org/viz/" title="XState Visualizer Iframe">
				</div>
			</body>
		</html>
	`;
}

// this method is called when your extension is deactivated
export function deactivate() {}
