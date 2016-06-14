module.exports = function (grunt) {
    var config = {
        js: {
            src: ["svg-injector", "handlebars", "jquery"],
            dest: "./build/assets/javascript/",
            useMin: true
        },
        svg: {
            src: ["octicons"],
            dest: "./build/assets/images/"
        }
    };

    grunt.config.set('bower-mapper', config);
};
