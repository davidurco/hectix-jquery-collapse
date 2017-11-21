module.exports = function( config ) {

	config.set( {
		port: 8080,
		runnerPort: 9010,
		files: [
			"bower_components/jquery/jquery.min.js",
			"dist/hectixcollapse.min.js",
			"test/setup.js",
			"test/spec/*"
		],
		frameworks: [ "qunit" ],
		autoWatch: true,
		browsers: [ "Chrome" ]
	} );
};
