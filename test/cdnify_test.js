'use strict';

var grunt = require('grunt');

exports.cdnify = {
  'Plain CSS file': function (test) {
    test.expect(1);

    var actual = grunt.file.read('test/output/sample.css');
    var expected = grunt.file.read('test/expected/sample.css');
    test.equal(actual, expected);

    test.done();
  },

  'HTML file including embedded CSS': function (test) {
    test.expect(1);

    var actual = grunt.file.read('test/output/sample.html');
    var expected = grunt.file.read('test/expected/sample.html');
    test.equal(actual, expected);

    test.done();
  },

  'HTML file including embedded CSS, with custom options': function (test) {
    test.expect(1);

    var actual = grunt.file.read('test/output/sample-custom-options.html');
    var expected = grunt.file.read('test/expected/sample-custom-options.html');
    test.equal(actual, expected);

    test.done();
  },

  'HTML file including absolute links with \'append\' option set to false': function (test) {
    test.expect(1);

    var actual = grunt.file.read('test/output/sample-append-options.html');
    var expected = grunt.file.read('test/expected/sample-append-options.html');
    test.equal(actual, expected);

    test.done();
  }
};
