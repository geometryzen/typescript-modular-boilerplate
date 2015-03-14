'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Task configuration.
    clean: {
      src: ['dist']
    },
    requirejs: {
      compile: {
        options: {
          mainConfigFile: "build.js",
          paths: {
          }
        }
      }
    },
    // minify the optimized library file
    uglify: {
      dist: {
        src: 'dist/typescript-modular-boilerplate.js',
        dest: 'dist/typescript-modular-boilerplate.min.js'
      }
    },
    // run jasmine tests any time watched files change
    watch: {
      files: ['src/**/*','test/spec/**/*']
    }
  });

  // Load external tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Make task shortcuts
  grunt.registerTask('default', ['requirejs', 'uglify']);
};
