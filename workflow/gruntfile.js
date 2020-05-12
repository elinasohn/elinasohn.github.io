/* The "wrapper" function */
module.exports = function(grunt) {
    // Do grunt-related things in here
    /* Project and task configuration */
    const sass = require('node-sass');
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /* Grunt Sass
        * https://www.npmjs.com/package/grunt-sass
        */

         sass: {
            options: {
                implementation: sass,
                sourceMap: false
            },
            dist: {
                files: {
                    'CSS/style.css': 'Assets/scss/style.scss'
                }
            }
        },

        /* Grunt Contrib Watch
        * https://www.npmjs.com/package/grunt-contrib-watch
        */

        watch: {

            sass: {

                files: [
                    'Assets/scss/*.scss'
                ],
                tasks: [
                    'sass'
                ]
            },
            scripts: {

                files: [
                    'Assets/js/*.js'
                ],
                tasks: [
                    'uglify'
                ]
            }
          },

          /* Grunt Contrib Uglify
          * https://www.npmjs.com/package/grunt-contrib-uglify
          */

          uglify: {

            my_target: {

                files: {
                    'js/scripts.js': ['Assets/js/scripts.js']
                }
            }

          }
    });
    
    
    /*Loading Grunt plugins and tasks*/
    require('load-grunt-tasks')(grunt);
    
    /*Custom tasks */
    grunt.registerTask('default', ['watch']);
};