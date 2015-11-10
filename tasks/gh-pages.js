module.exports = function (grunt) {
    var config = {
        options: {
            user: {
              name: 'Deploy',
              email: 'me+deploy@mylesbraithwaite.null'
            },
            base: 'build',
            branch: 'master'
        },
        src: ['**']
    };
    
    grunt.config.set('gh-pages', config);
};
