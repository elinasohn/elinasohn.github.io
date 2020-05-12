/* The "wrapper" function */
module.exports = function(grunt) {
    // Do grunt-related things in here
    /* Project and task configuration */
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


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
        }
    });
    
    
    /*Loading Grunt plugins and tasks*/
    require('load-grunt-tasks')(grunt);
    
    /*Custom tasks */
    grunt.registerTask('default', []);
};