import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import replace from "@rollup/plugin-replace";
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
    replace({ exclude: "node_modules/**", preventAssignment: true }),
    nodeResolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    commonjs(),
    image(),
    terser(),
  ],
  external: [...dependencies],
};
