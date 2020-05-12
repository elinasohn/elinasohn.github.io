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
                    'CSS/style.css': 'Asset/scss/style.scss'
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });
    
    
    /*Loading Grunt plugins and tasks*/
    require('load-grunt-tasks')(grunt);
    
    /*Custom tasks */
    
    grunt.registerTask('default', ['watch']);
};