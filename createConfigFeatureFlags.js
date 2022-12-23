const fs = require("fs");

const featureFlagsPaths = `${__dirname}/featureFlags.json`;

const loadFeatureFlags = (featureFlags) => {
  fs.rmSync(featureFlagsPaths, { recursive: true, force: true });
  fs.writeFileSync(featureFlagsPaths, JSON.stringify(featureFlags));
};

module.exports = {
  loadFeatureFlags,
};
