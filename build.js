require('@vercel/ncc')('src/index.ts', {
  // provide a custom cache path or disable caching
  cache: './custom/cache/path' | false,
  // externals to leave as requires of the build
  externals: [],
  // directory outside of which never to emit assets
  filterAssetBase: process.cwd(), // default
  minify: false, // default
  sourceMap: false, // default
  assetBuilds: false, // default
  sourceMapBasePrefix: '../', // default treats sources as output-relative
  // when outputting a sourcemap, automatically include
  // source-map-support in the output file (increases output by 32kB).
  sourceMapRegister: true, // default
  watch: false, // default
  license: '', // default does not generate a license file
  target: 'es2015', // default
  v8cache: false, // default
  quiet: false, // default
  debugLog: false, // default
}).then(({ code, map, assets }) => {
  console.log(code)
  // Assets is an object of asset file names to { source, permissions, symlinks }
  // expected relative to the output code (if any)
})
