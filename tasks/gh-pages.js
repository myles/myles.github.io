module.exports = function (grunt) {
    var config = {
        options: {
            base: 'build',
            branch: 'master'
        },
        src: ['**']
    };
    
    grunt.config.set('gh-pages', config);
};
