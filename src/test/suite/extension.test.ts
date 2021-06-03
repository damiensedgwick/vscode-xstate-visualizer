import * as vscode from "vscode";
import * as assert from "assert";

suite("Extension Test Suite", () => {
  test("Sample test", () => {
    assert.strictEqual(-1, [1, 2, 3].indexOf(5));
    assert.strictEqual(-1, [1, 2, 3].indexOf(0));
  });

  test("Check 'Say Hello' command exists", () => {
    const extension = vscode.extensions.getExtension(
      "xstate-visualizer.sayHello"
    )?.isActive;

    assert.strictEqual(extension, true);
  });
});
