import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import replace from '@rollup/plugin-replace';
import eslint from '@rollup/plugin-eslint';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const dependencies = [
	...Object.keys(pkg.peerDependencies),
	...Object.keys(pkg.devDependencies),
];

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'esm' },
	],
	plugins: [
		commonjs({
			ignoreGlobal: true,
			include: /node_modules/,
		}),
		replace({ exclude: 'node_modules/**', preventAssignment: true }),
		eslint({ exclude: /(node_modules)/ }),
		nodeResolve(),
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
		}),
		image(),
		//  terser(),
	],
	external: [...new Set([/@babel\/runtime/, ...dependencies])],
};
