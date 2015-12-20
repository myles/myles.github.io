module.exports = function (grunt) {
    var config = {
        js: {
            src: ["svg-injector", "handlebars", "jquery"],
            dest: "./source/assets/javascript/",
            useMin: true
        }
    };
    
    grunt.config.set('bower-mapper', config);
};
