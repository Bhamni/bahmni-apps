module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist',
        test: 'test'
    };

    try {
        yeomanConfig.app = require('./package.json').appPath || yeomanConfig.app;
    } catch (e) {}

    grunt.initConfig({
        yeoman: yeomanConfig,
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: '<%= yeoman.app %>/styles',
                    cssDir: '<%= yeoman.app %>/styles/css',
                    imagesDir: '<%= yeoman.app %>/images',
                    // Should be modified to include modules/ as well. String config, not an array.
                    // Have to figure out a way to do this via globbing. The config
                    // is not relevant to us though.
                    javascriptsDir: '<%= yeoman.app %>/scripts',
                    fontsDir: '<%= yeoman.app %>/styles/fonts',
//                    importPath: '<%= yeoman.app %>/components',
                    relativeAssets: true
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.app %>/styles/css/**',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: [
                '<%= yeoman.app %>/styles/css/**'
            ]
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'components/**/*',
                        'images/**/*.{gif,webp}',
                        'styles/fonts/*',
                        'lib/**/*',
                        'styles/css/**/*',
                        '*.html',
                        'modules/**/*'
                    ]
                }]
            }
        }
    });

    grunt.registerTask('dist', ['clean:dist', 'compass:dist', 'copy:dist']);

    grunt.registerTask('build', [
        'dist'
    ]);

    grunt.registerTask('default', ['build']);

};
