const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  outfile: './dist/grid-core.js',
  format: 'umd',
  globalName: 'MitchAllen_GridCore',
  minify: true,
  sourcemap: true,
  target: ['es2015'],
}).catch(() => process.exit(1));
