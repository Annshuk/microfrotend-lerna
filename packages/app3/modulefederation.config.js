const deps = require("./package.json").dependencies;

module.exports = {
  name: "app3",
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  remotes: {
    app1: "app1@http://localhost:3000/remoteEntry.js",
  },
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
