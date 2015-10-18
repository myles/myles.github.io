module.exports = function (grunt) {
    var config = {
        options: {
            layout: 'source/layouts/default.hbs',
            flatten: true,
            production: false,
            data: 'source/data/*.yml',
            partials: [
                'source/partials/*.html',
                'source/partials/*.md'
            ]
        },
        pages: {
            files: {
                'build/': [
                    'source/pages/index.hbs'
                ],
                'build/archive/': [
                    'source/pages/archive/index.hbs'
                ]
            }
        }
    };
    
    grunt.config.set('assemble', config)
};