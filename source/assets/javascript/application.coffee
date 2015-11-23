$ ->
  source = '<ul class="bullets">' +
    '{{#each data}}' +
    '{{#unless fork}}' +
      '<li class="bullet">' +
        '<div class="bullet-content">' +
          '<a href="{{html_url}}">' +
            '<h2>' + 
              '{{#if language}}{{language}}: {{/if}}' +
              '{{name}} ' +
            '</h2>' +
          '</a>' +
          '<ul class="bullet-links">' +
            '<li>' +
              '<a href="{{html_url}}">' +
                '<img src="/assets/images/octoface.svg" title="GitHub">' +
              '</a>' +
            '</li>' +
            '{{#if homepage}}' +
            '<li>' +
              '<a href="{{homepage}}">' +
                '<img src="/assets/images/link-external.svg" title="Homepage">' +
              '</a>' +
            '</li>' +
            '{{/if}}' +
            '{{#if has_wiki}}' +
            '<li>' +
              '<a href="{{html_url}}/wiki">' +
                '<img src="/assets/images/book.svg" title="Wiki">' +
              '</a>' +
            '</li>' +
            '{{/if}}' +
            '{{#if has_issues}}' +
            '<li>' +
              '<a href="{{html_url}}/issues">' +
                '<img src="/assets/images/issue-opened.svg" title="Wiki">' +
              '</a>' +
            '</li>' +
            '{{/if}}' +
            # '{{#if has_downloads}}' +
            # '<li>' +
            #   '<a href="{{html_url}}/releases">' +
            #     '<img src="/assets/images/desktop-download.svg" title="Downloads">' +
            #   '</a>' +
            # '</li>' +
            # '{{/if}}' +
          '</ul>' +
          '<p>{{description}}</p>' +
        '</div>' +
      '</li>' +
    '{{/unless}}' +
    '{{/each}}' +
    '</ul>'
  
  template = Handlebars.compile(source)
  articleRepo = $('#js-github-projects')
  articleArchiveRepo = $('#js-github-archive-projects')
  
  if articleRepo
    jQuery.getJSON 'https://api.github.com/users/myles/repos?sort=updated&type=all&callback=?', (data) ->
      articleRepo.html(template(data))
      return
  
  if articleArchiveRepo
    jQuery.getJSON 'https://api.github.com/orgs/myles-archive/repos?sort=updated&type=all&callback=?', (data) ->
      articleArchiveRepo.html(template(data))
      return
  
  return
