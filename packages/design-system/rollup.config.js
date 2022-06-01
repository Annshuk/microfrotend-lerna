import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

const dependencies = [
  ...Object.keys(pkg.peerDependencies),
  ...Object.keys(pkg.devDependencies),
];

export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    image(),
    terser(),
  ],
  external: [...dependencies],
};
