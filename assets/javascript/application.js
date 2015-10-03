(function() {
  $(function() {
    var api_url, articleRepo, source, template;
    source = '<ul class="bullets">' + '{{#each data}}' + '{{#unless fork}}' + '<li class="bullet">' + '<div class="bullet-content">' + '<a href="{{html_url}}">' + '<h2>{{full_name}}</h2>' + '</a>' + '<p>{{description}}</p>' + '</div>' + '</li>' + '{{/unless}}' + '{{/each}}' + '</ul>';
    api_url = 'https://api.github.com/users/myles/repos?sort=updated&type=all&callback=?';
    template = Handlebars.compile(source);
    articleRepo = $('#js-github-projects');
    jQuery.getJSON(api_url, function(data) {
      articleRepo.html(template(data));
    });
  });

}).call(this);
