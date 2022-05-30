import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    commonjs(),
    terser(),
    image(),
  ],
  external: Object.keys(pkg.peerDependencies),
};
