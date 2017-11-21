module.exports = function( grunt ) {

	grunt.initConfig( {

		// Lint definitions
		jshint: {
			files: [ "src/hectixcollapse.js", "test/**/*" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		concat: {
			dist: {
				src: [ "src/hectixcollapse.js" ],
				dest: "dist/hectixcollapse.js"
			}
		},

		jscs: {
			src: "src/*.js",
			options: {
				config: ".jscsrc"
			}
		},

		// Minify definitions
		uglify: {
			dist: {
				src: [ "dist/hectixcollapse.js" ],
				dest: "dist/hectixcollapse.min.js"
			}
		},

		// karma test runner
		karma: {
			unit: {
				configFile: "karma.conf.js",
				background: true,
				singleRun: false,
				browsers: [ "Chrome" ]
			},

			//continuous integration mode: run tests once in PhantomJS browser.
			travis: {
				configFile: "karma.conf.js",
				singleRun: true,
				browsers: [ "Chrome" ]
			}
		},

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
			files: [ "src/*", "test/**/*" ],
			tasks: [ "default" ]
		}

	} );

	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-concat" );
	grunt.loadNpmTasks( "grunt-jscs" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );
	grunt.loadNpmTasks( "grunt-karma" );

	grunt.registerTask( "travis", [ "jshint", "karma:travis" ] );
	grunt.registerTask( "lint", [ "jshint", "jscs" ] );
	grunt.registerTask( "build", [ "concat", "uglify" ] );
	grunt.registerTask( "default", [ "jshint", "build", "karma:unit" ] );
};
