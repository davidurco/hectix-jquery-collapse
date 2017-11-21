( function( $, QUnit ) {

	"use strict";

	var $fixture = null;

	QUnit.test( "is inside jQuery library", function( assert ) {

		assert.equal( typeof $.fn.hectixCollapse, "function", "has function inside jquery.fn" );
		assert.equal( typeof $fixture.hectixCollapse, "function", "another way to test it" );
	} );

	QUnit.test( "returns jQuery functions after called (chaining)", function( assert ) {
		assert.equal(
			typeof $fixture.hectixCollapse().on,
			"function",
			"'on' function must exist after plugin call" );
	} );

}( jQuery, QUnit ) );
