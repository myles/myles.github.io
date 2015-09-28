module.exports = function (grunt) {
    var config = {
        options: {
            base: 'build'
        },
        src: ['**']
    };
    
    grunt.config.set('gh-pages', config);
};
