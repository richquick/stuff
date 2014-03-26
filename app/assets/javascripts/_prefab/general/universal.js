pf.universal = {
  conventions: {
    universalSelector:        'ul.universal',
    expanderSelector:         '.expander',
    expandedClass:            'expanded',
    toggleSelector:           'a.toggle',
    toggleClass:              'on',
    tooltipSelector:          '.tooltip',
    tooltipSnippet:           '<div class="tooltip holder">#{}</div>'
  },
  dataAttributes: {
    toggleTarget:             "data-pf-toggle-target",
    toggleClass:              "data-pf-toggle-class",
    toggleRemove:             "data-pf-toggle-remove"
  },
  isUrlExternal: function(url) {
    return ((url.indexOf("http://") >= 0 || url.indexOf("https://") >= 0) && url.indexOf(pf.universal.getThisDomain()) < 0);
  },
  getThisDomain: function() {
    return window.location.host;
  },
  getToggleTarget: function($element) {
    var attr = $element.attr(pf.universal.dataAttributes.toggleTarget);
    return (typeof attr !== 'undefined' && attr !== false && pf.common.isValidID(attr)) ? attr : false;
  },
  getToggleClass: function($element) {
    var attr = $element.attr(pf.universal.dataAttributes.toggleClass);
    return (typeof attr !== 'undefined' && attr !== false) ? attr : false;
  },
  getToggleRemove: function($element) {
    var attr = $element.attr(pf.universal.dataAttributes.toggleRemove);
    return (typeof attr !== 'undefined' && attr !== false) ? attr : false;
  },
  hasToggleTarget: function($element) {
    return (pf.universal.getToggleTarget($element) !== false);
  },
  hasToggleClass: function($element) {
    return (pf.universal.getToggleClass($element) !== false);
  },
  hasToggleRemove: function($element) {
    return (pf.universal.getToggleRemove($element) !== false);
  },
  doToggle: function($element) {
    var $toggleTarget = $(pf.common.stringToID(pf.universal.getToggleTarget($element)));
    var toggleClass = pf.universal.getToggleClass($element);
    var hasToggleRemove = pf.universal.hasToggleRemove($element);
    if (hasToggleRemove) {
      var toggleRemove = pf.universal.getToggleRemove($element);
      $toggleTarget.addClass(toggleClass).removeClass(toggleRemove);
    } else {
      $toggleTarget.toggleClass(toggleClass);
    }
  },
  setupToggles: function() {
    $(pf.universal.conventions.toggleSelector).on( "click", function() {
      var $this = $(this);
      if (pf.universal.hasToggleClass($this) && pf.universal.hasToggleTarget($this)) {
        pf.universal.doToggle($this);
        return false;
      }
    });
  },
  setupExternalLinks: function() {
    $('a[href]').each(function() {
      var $this = $(this);
      if (pf.universal.isUrlExternal($this.attr('href'))) {
        $this.click(function(event) {
          event.preventDefault();
          event.stopPropagation();
          window.open(this.href, '_blank');
        });
      }
    });
  },
  setupTooltips: function() {
    $(pf.universal.conventions.tooltipSelector).each(function() {
      var $this = $(this);
      if (pf.common.hasTitle($this)) {
        tooltipText = $this.attr('title');
        var snippet = pf.common.interpolateString(pf.universal.conventions.tooltipSnippet,tooltipText);
        $this.append(snippet);
      }
      // var tooltipText = 'Coming Soon';
    });
  },
  setupUniversal: function() {
    pf.universal.setupExternalLinks();
    pf.universal.setupToggles();
    pf.universal.setupTooltips();
  }
};

define(['jquery','common'], function() {
  pf.universal.setupUniversal();
});
