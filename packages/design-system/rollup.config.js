import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    commonjs(),
    terser(),
  ],
  external: Object.keys(pkg.peerDependencies),
};
