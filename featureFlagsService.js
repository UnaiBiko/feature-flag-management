const featureFlags = require("./featureFlags.json");

const getFlagStatus = (flagName) => {
  if (!featureFlags) return;

  return featureFlags[flagName];
};

module.exports = { getFlagStatus };
