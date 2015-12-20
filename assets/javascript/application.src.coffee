class GoogleAnalytics
  @init: (webPropertyId) ->
    @_initQueue webPropertyId
    scriptTag = @_createScriptTag()
    @_injectScriptTag scriptTag
    true

  @_initQueue: (webPropertyId) ->
    window._gaq ?= []
    window._gaq.push ['_setAccount', webPropertyId]
    window._gaq.push ['_trackPageview']

  @_createScriptTag: ->
    scriptTag = document.createElement 'script'
    scriptTag.type = 'text/javascript'
    scriptTag.async = true
    protocol = location.protocol
    scriptTag.src = "#{ protocol }//stats.g.doubleclick.net/dc.js"
    scriptTag

  @_injectScriptTag: (scriptTag) ->
    firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore scriptTag, firstScriptTag

  @trackPageView: (url) ->
    window._gaq.push ['_trackPageview', url]

  @trackEvent: (category, action, label = null, value = null, nonInteraction = null) ->
    trackedEvent = ['_trackEvent', category, action]
    for argument in [label, value, nonInteraction]
      if argument? then trackedEvent.push argument else break
    window._gaq.push trackedEvent

window.GoogleAnalytics = GoogleAnalytics

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
