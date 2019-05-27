/* jshint node: true */
module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-ngdocs');

  // Project configuration.
  grunt.util.linefeed = '\n'; // eslint-disable-line

  grunt.initConfig({
    ngdocs: {
      options: {
        dest: './docs/',
        scripts: [
          './dist/vendors-app.bundle.js',
          './dist/app.bundle.js'
        ],
        styles: []
      },
      all: ['src/**/*.js']
    }
  });

  grunt.registerTask('docs', ['ngdocs']);

  return grunt;
};
