const esbuild = require('esbuild');

const shared = {
  entryPoints: ['./src/index.js'],
  bundle: true,
  sourcemap: true,
  target: ['es2015'],
};

// Browser builds expose window.MitchAllen.GridCore -- the name the README
// documents and the convention the rest of the family follows. An earlier
// esbuild migration set this to the flat MitchAllen_GridCore, which matched
// neither.
const iife = {
  ...shared,
  format: 'iife',
  globalName: 'MitchAllen.GridCore',
};

const builds = [
  // Readable browser bundle.
  { ...iife, outfile: './dist/grid-core.js', minify: false },
  // Minified browser bundle. This is the file the README's jsDelivr link
  // serves, so it is built here rather than left to drift.
  { ...iife, outfile: './dist/grid-core.min.js', minify: true },
  // CommonJS entry point; package.json "main" resolves here.
  { ...shared, format: 'cjs', outfile: './dist/grid-core.cjs.js', minify: false },
];

Promise.all(builds.map((options) => esbuild.build(options))).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
