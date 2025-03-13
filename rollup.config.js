import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy';
import { config } from "./src/config/config.js";

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'es',
        sourcemap: config.sourceMap,
    },
    plugins: [
        typescript(),
        resolve(),
        copy({
            targets: [{ src: 'demo/index.html', dest: 'dist' }],
            flatten: false, // Asegura que la estructura de archivos se mantenga
        }),
    ],
};
