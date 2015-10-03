$ ->
  source = '<ul class="bullets">' +
    '{{#each data}}' +
    '{{#unless fork}}' +
      '<li class="bullet">' +
        '<div class="bullet-content">' +
          '<a href="{{html_url}}">' +
            '<h2>{{full_name}}</h2>' +
          '</a>' +
          '<p>{{description}}</p>' +
          '<ul>' +
            '<li><a href="{{git_url}}"><span class="octicon octicon-repo"></span></a></li>' +
            '{{#if has_wiki}}' +
              '<li><a href="{{html_url}}/wiki"><span class="octicon octicon-book"></span></a></li>' +
            '{{/if}}' +
            '{{#if has_issues}}' +
              '<li><a href="{{html_url}}/issues"><span class="octicon octicon-issue-opened"></span></a></li>' +
            '{{/if}}' +
          '</ul>' +
        '</div>' +
      '</li>' +
    '{{/unless}}' +
    '{{/each}}' +
    '</ul>'
  
  api_url = 'https://api.github.com/users/myles/repos?sort=updated&type=all&callback=?'
  
  template = Handlebars.compile(source)
  articleRepo = $('#js-github-projects')
  
  jQuery.getJSON api_url, (data) ->
    articleRepo.html(template(data))
    return
  return
