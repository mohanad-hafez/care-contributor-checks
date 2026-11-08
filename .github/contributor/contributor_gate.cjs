"use strict";

function decide(pull) {
  if (typeof pull.merged !== "boolean") {
    throw new Error("Merged status unavailable");
  }
  if (!pull.merged) {
    return { action: "noop", message: "PR was closed without merging" };
  }
  // The remaining source task includes author eligibility and personalized analysis.
  // A merged flag alone must never manufacture a thank-you message or eligibility.
  return { action: "defer", message: "Continue original eligibility and contribution analysis" };
}

module.exports = { decide };
