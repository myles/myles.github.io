module.exports = function (grunt) {
    var config = {
        images: {
            expand: true,
            cwd: 'source/assets/images/',
            src: '**',
            dest: 'build/assets/images/'
        },
        javascript: {
            expand: true,
            cwd: 'source/assets/javascript/',
            src: '*.js',
            dest: 'build/assets/javascript/'
        }
    };
    
    grunt.config.set('copy', config);
};
