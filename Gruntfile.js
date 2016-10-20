module.exports = function (grunt) {
    "use strict";
    var pkgconf = grunt.file.readJSON('package.json');

    // Project configuration
    grunt.initConfig({
        pkg: pkgconf,
        uglify: {
            dist: {
                files: {
                    'javascripts/contra.min.js': ['src/contra.js']
                }
            }
        }
    });

    // Load grunt uglify taks
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Minify task - grunt uglify
    grunt.registerTask('minify', ['uglify']);
};