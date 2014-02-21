require.config({
	basUrl: 'js/lib',
	paths: {
		jquery: 'lib/jquery-1.10.2.min',
		slides: 'lib/jquery.slides.min',
		lightbox: 'lib/lightbox-2.6.min',
		modernizr: 'lib/modernizr',
		prefix: 'lib/prefixfree.min',
		respond: 'lib/respond'
	},
	shim: {
		"lightbox": {
			deps: ["jquery"]
		},
		"slides": {
			deps: ["jquery"]
		}
	},
	map: {
		'*': {
			'jquery': 'lib/jquery-1.10.2.min'
		}
	}
});

define(['jquery', 'slides', 'lightbox', 'modernizr', 'prefix', 'respond'], function ($, Slides, Lightbox, Modernizr, Prefix, Respond) {

	

});