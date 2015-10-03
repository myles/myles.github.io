module.exports = function (grunt) {
    var config = {
        options: {
            precomposed: true,
            trueColor: true,
            html: 'build/index.html'
        },
        icons: {
            src: 'source/assets/images/suite-and-tie.png',
            dest: 'build/'
        }
    };
    
    grunt.config.set('favicons', config);
};
