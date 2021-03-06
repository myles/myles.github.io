$ ->
  window.GoogleAnalytics.init 'UA-1642439-37'
  
  source = $('#js-github-projects-template').html()
  template = Handlebars.compile(source)
  
  articleRepo = $('#js-github-projects')
  articleArchiveRepo = $('#js-github-archive-projects')
  
  SVGInjector $('.iconic')
  
  if articleRepo
    jQuery.getJSON 'https://api.github.com/users/myles/repos?sort=updated&type=all&callback=?', (data) ->
      articleRepo.html(template(data))
  
  if articleArchiveRepo
    jQuery.getJSON 'https://api.github.com/orgs/myles-archive/repos?sort=updated&type=all&callback=?', (data) ->
      articleArchiveRepo.html(template(data))
      return
  
  return
