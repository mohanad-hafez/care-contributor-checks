const { test } = require("node:test");
const assert = require("node:assert/strict");
const { decide } = require("./contributor_gate.cjs");

test("closed unmerged requests do not receive a thank-you", () => {
  assert.deepEqual(decide({ merged: false, state: "closed" }), {
    action: "noop", message: "PR was closed without merging"
  });
});
test("merged requests retain remaining eligibility and semantic work", () => {
  assert.equal(decide({ merged: true }).action, "defer");
});
test("missing status does not silently bypass work", () => {
  assert.throws(() => decide({}), /unavailable/);
});
