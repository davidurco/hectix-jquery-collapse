module.exports = function( config ) {

	config.set( {
		plugins: [
			require( 'qunit' )
		],
		files: [
			"bower_components/jquery/dist/jquery.js",
			"dist/hectixcollapse.min.js",
			"test/setup.js",
			"test/spec/*"
		],
		frameworks: [ "qunit" ],
		autoWatch: true
	} );
};
