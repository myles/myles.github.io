(function() {
  $(function() {
    var api_url, articleRepo, source, template;
    source = '<ul class="bullets">' + '{{#each data}}' + '{{#unless fork}}' + '<li class="bullet">' + '<div class="bullet-content">' + '<a href="{{html_url}}">' + '<h2>' + '{{full_name}} ' + '{{#if language}}<em>({{language}})</em>{{/if}}' + '</h2>' + '</a>' + '<ul class="bullet-links">' + '{{#if homepage}}' + '<li>' + '<a href="{{homepage}}">' + '<img src="/assets/images/link-external.svg" title="Homepage">' + '</a>' + '</li>' + '{{/if}}' + '{{#if has_wiki}}' + '<li>' + '<a href="{{html_url}}/wiki">' + '<img src="/assets/images/book.svg" title="Wiki">' + '</a>' + '</li>' + '{{/if}}' + '{{#if has_issues}}' + '<li>' + '<a href="{{html_url}}/issues">' + '<img src="/assets/images/issue-opened.svg" title="Wiki">' + '</a>' + '</li>' + '{{/if}}' + '</ul>' + '<p>{{description}}</p>' + '</div>' + '</li>' + '{{/unless}}' + '{{/each}}' + '</ul>';
    api_url = 'https://api.github.com/users/myles/repos?sort=updated&type=all&callback=?';
    template = Handlebars.compile(source);
    articleRepo = $('#js-github-projects');
    jQuery.getJSON(api_url, function(data) {
      articleRepo.html(template(data));
    });
  });

}).call(this);
