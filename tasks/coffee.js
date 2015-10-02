module.exports = function (grunt) {
    var config = {
        glob_to_multiple: {
            expand: true,
            flatten: true,
            cwd: 'source/assets/javascript/',
            src: ['*.coffee'],
            dest: 'build/assets/javascript/',
            ext: '.js'
        }
    };
    
    grunt.config.set('coffee', config);
};
