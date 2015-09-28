module.exports = function (grunt) {
    grunt.registerTask('build', [
        'assemble',
        'sass',
    ]);
    
    grunt.registerTask('run', [
        'build',
        'connect:server',
        'watch'
    ]);
    
    grunt.registerTask('default', [
        'run'
    ]);
};