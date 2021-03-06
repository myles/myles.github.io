module.exports = function (grunt) {
    var config = {
        options: {
            livereload: true
        },
        html: {
            tasks: [
                'assemble'
            ],
            files: [
                'source/**/*.hbs',
                'source/**/*.yml',
                'source/helpers/*-helper.js'
            ]
        },
        sass: {
            tasks: [
                'sass'
            ],
            files: [
                'source/assets/stylesheets/*.scss',
                'source/assets/stylesheets/**/*.scss'
            ]
        },
        coffee: {
            tasks: [
                'coffee'
            ],
            files: [
                'source/assets/javascript/*.coffee'
            ]
        },
        bower: {
            tasks: [
                'bower-mapper'
            ],
            files: [
                'bower.json',
                'bower.mapper.json'
            ]
        }
    };

    grunt.config.set('watch', config);
};