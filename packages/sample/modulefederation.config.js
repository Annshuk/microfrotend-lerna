const deps = require("./package.json").dependencies;

module.exports = {
  name: "app4",
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps[ "react-dom" ],
    },
  },
};
