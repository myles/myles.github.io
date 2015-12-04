module.exports = function (grunt) {
    var config = {
        options: {
            user: {
              name: 'Deploy',
              email: 'me+deploy@mylesbraithwaite.com'
            },
            base: 'build',
            branch: 'master',
            repo: 'https://' + process.env.GH_TOKEN + '@github.com/myles/myles.github.io.git'
        },
        src: ['**']
    };
    
    grunt.config.set('gh-pages', config);
};
