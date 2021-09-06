require('esbuild').buildSync({
	entryPoints: ['desktop_backend/src/index.js'],
	external: ["electron"],
	bundle: true,
	minify: true,
	platform: 'node',
	target: ['node10.4'],
	outfile: 'src/index.js'
});