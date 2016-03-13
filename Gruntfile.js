/*
  grunt-cdnify
  https://github.com/callumlocke/grunt-cdnify

  Copyright 2013 Callum Locke
  Licensed under the MIT license.
*/

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: {
        src: [
          'tasks/*.js',
          'Gruntfile.js',
          '<%= nodeunit.tests %>'
        ]
      }
    },

    clean: {
      tests: 'test/output'
    },

    nodeunit: {
      tests: 'test/cdnify_test.js'
    },

    cdnify: {
      options: {
        base: '//cdn.example.com/stuff/'
      },
      defaultOptions: {
        files: {
          'test/output/sample.css': 'test/fixtures/sample.css',
          'test/output/sample.html': 'test/fixtures/sample.html'
        }
      },
      customOptions: {
        options: {
          html: {
            'img[truffles]': 'truffles',
            'img[ng-src]': 'ng-src',
            'img[src]': false,
            'img[data-src]': false
          }
        },
        files: {
          'test/output/sample-custom-options.html': 'test/fixtures/sample.html'
        }
      },
      appendOptions: {
        options: {
          append: true
        },
        files: {
          'test/output/sample-append-options.html': 'test/fixtures/sample-absolute-paths.html'
        }
      }
    },

    watch: {
      all: {
        files: ['tasks/*.js', 'test/*.js'],
        tasks: ['test']
      }
    }

  });

  grunt.loadTasks('tasks');
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['clean', 'jshint', 'cdnify', 'nodeunit']);

  grunt.registerTask('default', ['watch']);
};
