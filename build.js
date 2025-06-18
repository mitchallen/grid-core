const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './dist/grid-core.js',
  format: 'iife', // changed from 'umd' to 'iife'
  globalName: 'MitchAllen_GridCore',
  minify: true,
  sourcemap: true,
  target: ['es2015'],
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
