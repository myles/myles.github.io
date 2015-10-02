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
                'source/**/*.yml'
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
        }
    };
    
    grunt.config.set('watch', config);
};