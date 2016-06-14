module.exports = function (grunt) {
    grunt.registerTask('build', [
        'assemble',
        'favicons',
        'copy',
        'sass',
        'coffee',
        'bower-mapper'
    ]);
    
    grunt.registerTask('develop', [
        'build',
        'connect:server',
        'watch'
    ]);
    
    grunt.registerTask('deploy', [
        'clean',
        'build',
        'gh-pages',
        'gh-pages-clean'
    ]);
    
    grunt.registerTask('default', [
        'develop'
    ]);
};
