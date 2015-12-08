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
            ],
            plugins: ['grunt-assemble-sitemap'],
            sitemap: {
                homepage: 'http://myles.github.io',
                changefreq: 'daily',
                priority: '0.8',
                relativedest: true
            }
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
