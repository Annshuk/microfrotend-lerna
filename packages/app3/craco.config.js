const cracoModuleFederation = require("craco-module-federation");

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
  webpack: {
    plugins: {
      remove: [ "ModuleScopePlugin" ],
    },
    rules: [
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ]
  },
};
