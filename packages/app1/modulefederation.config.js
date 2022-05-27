const deps = require("./package.json").dependencies;

console.log(process.env.ROOT_PATH_MODE);
module.exports = {
  name: "app1",
  exposes: {
    "./Button": "./src/Button",
    "./Button2": "./src/Button2",
  },
  remotes: {
    app2: "app2@http://localhost:3002/remoteEntry.js",
    app3: "app3@http://localhost:3003/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      requiredVersion: deps["react-dom"],
    },
  },
};
