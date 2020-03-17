import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.js',
    output: {
        dir: './build',
        format: 'cjs'
    },
    plugins: [
        postcss({ })
    ]
};