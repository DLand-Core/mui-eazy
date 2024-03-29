import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

/**entries */
const entry = "src/index.ts";
const isProd = process.env.NODE_ENV === "production";

const commonPlugins = [
  image(),
  postcss(),
  commonjs(),
  resolve(),
  typescript({ tsconfig: "./tsconfig.json" }),
  babel({
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    exclude: "**/node_modules/**",
  }),
  json(),
  terser(),
];

const esmOutput = {
  preserveModules: true,
  preserveModulesRoot: "src",
};

export default () => {
  return {
    input: [entry],
    output: {
      ...esmOutput, dir: "dist/", format: "es",
    },
    external: ['react', 'react-dom', '@emotion/react', '@mui/material', '@emotion/styled', '@mui/system', '@mui/x-data-grid', '@mui/x-date-pickers', 'yup', '@mui/lab'],
    plugins: [...commonPlugins],
    logLevel: "silent",
    treeshake: 'smallest'
  };
};
