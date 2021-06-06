import * as vscode from "vscode";
import * as assert from "assert";

suite("Extension Test Suite", () => {
  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });

  test("Check 'Say Hello' command exists", async () => {
    const commandExists = await vscode.commands
      .getCommands()
      .then((commands) => commands.includes("xstate-visualizer.sayHello"));

    assert.strictEqual(commandExists, true);
  });
});
