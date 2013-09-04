module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'app/css',
                    cssDir: 'app/css'
                }
            }
        }
    });

    grunt.registerTask('dist', ['compass:dist']);

    grunt.registerTask('build', [
        'dist'
    ]);

    grunt.registerTask('default', ['build']);

};
