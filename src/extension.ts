import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  context.subscriptions.push(
    vscode.commands.registerCommand("xstateviz.visualizer", () => {
      const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (currentPanel) {
        currentPanel.reveal(columnToShowIn);
      } else {
        currentPanel = vscode.window.createWebviewPanel(
          "xstateVisualizer",
          "XState Visualizer",
          vscode.ViewColumn.One,
          {
            enableScripts: true,
          }
        );

        currentPanel.webview.html = getWebviewContent();

        currentPanel.onDidDispose(
          () => {
            currentPanel = undefined;
          },
          null,
          context.subscriptions
        );
      }
    })
  );
}

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

export function deactivate() {}
