(function() {
  var GoogleAnalytics;

  GoogleAnalytics = (function() {
    function GoogleAnalytics() {}

    GoogleAnalytics.init = function(webPropertyId) {
      var scriptTag;
      this._initQueue(webPropertyId);
      scriptTag = this._createScriptTag();
      this._injectScriptTag(scriptTag);
      return true;
    };

    GoogleAnalytics._initQueue = function(webPropertyId) {
      if (window._gaq == null) {
        window._gaq = [];
      }
      window._gaq.push(['_setAccount', webPropertyId]);
      return window._gaq.push(['_trackPageview']);
    };

    GoogleAnalytics._createScriptTag = function() {
      var protocol, scriptTag;
      scriptTag = document.createElement('script');
      scriptTag.type = 'text/javascript';
      scriptTag.async = true;
      protocol = location.protocol;
      scriptTag.src = protocol + "//stats.g.doubleclick.net/dc.js";
      return scriptTag;
    };

    GoogleAnalytics._injectScriptTag = function(scriptTag) {
      var firstScriptTag;
      firstScriptTag = document.getElementsByTagName('script')[0];
      return firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
    };

    GoogleAnalytics.trackPageView = function(url) {
      return window._gaq.push(['_trackPageview', url]);
    };

    GoogleAnalytics.trackEvent = function(category, action, label, value, nonInteraction) {
      var argument, i, len, ref, trackedEvent;
      if (label == null) {
        label = null;
      }
      if (value == null) {
        value = null;
      }
      if (nonInteraction == null) {
        nonInteraction = null;
      }
      trackedEvent = ['_trackEvent', category, action];
      ref = [label, value, nonInteraction];
      for (i = 0, len = ref.length; i < len; i++) {
        argument = ref[i];
        if (argument != null) {
          trackedEvent.push(argument);
        } else {
          break;
        }
      }
      return window._gaq.push(trackedEvent);
    };

    return GoogleAnalytics;

  })();

  window.GoogleAnalytics = GoogleAnalytics;

  $(function() {
    var articleArchiveRepo, articleRepo, source, template;
    window.GoogleAnalytics.init('UA-1642439-37');
    source = $('#js-github-projects-template').html();
    template = Handlebars.compile(source);
    articleRepo = $('#js-github-projects');
    articleArchiveRepo = $('#js-github-archive-projects');
    SVGInjector($('.iconic'));
    if (articleRepo) {
      jQuery.getJSON('https://api.github.com/users/myles/repos?sort=updated&type=all&callback=?', function(data) {
        return articleRepo.html(template(data));
      });
    }
    if (articleArchiveRepo) {
      jQuery.getJSON('https://api.github.com/orgs/myles-archive/repos?sort=updated&type=all&callback=?', function(data) {
        articleArchiveRepo.html(template(data));
      });
    }
  });

}).call(this);

//# sourceMappingURL=application.js.map
