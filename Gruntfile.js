'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'nodeunit']);

	grunt.initConfig({
		nodeunit: {
			files: ['src/**/*Test.js']
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			projectBase: {
				src: '*.js'
			},
			src: {
				src: ['src/**/*.js']
			}
		},

		watch: {
			all: {
				files: ['**/*.js'],
				tasks: ['jshint', 'nodeunit']
			}
		}
	});

};
