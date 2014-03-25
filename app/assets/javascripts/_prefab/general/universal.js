pf.universal = {
  conventions: {
    universalSelector:        'ul.universal',
    expanderSelector:         '.expander',
    expandedClass:            'expanded',
    toggleSelector:           'a.toggle',
    toggleClass:              'on'
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
  setupToggles: function() {
    $(pf.universal.conventions.toggleSelector).on( "click", function() {
      var $this = $(this);
      if (pf.universal.hasToggleClass($this) && pf.universal.hasToggleTarget($this)) {
        var $toggleTarget = $(pf.common.stringToID(pf.universal.getToggleTarget($this)));
        var toggleClass = pf.universal.getToggleClass($this);
        var hasToggleRemove = pf.universal.hasToggleRemove($this);
        if (hasToggleRemove) {
          var toggleRemove = pf.universal.getToggleRemove($this);
          $toggleTarget.addClass(toggleClass).removeClass(toggleRemove);
        } else {
          $toggleTarget.toggleClass(toggleClass);
        }
        return false;
      }
    });
    // $('a.toggle').each(function() {
    //   $this = $(this);
    //   if (pf.universal.hasToggleClass($this) && pf.universal.hasToggleTarget($this)) {
    //     $this.click(function(event) {
    //       event.preventDefault();
    //       event.stopPropagation();
    //       $toggleTarget = $(pf.common.stringToID(pf.universal.getToggleTarget($this)));
    //       toggleClass = pf.universal.getToggleClass($this);
    //       hasToggleRemove = pf.universal.hasToggleRemove($this);

    //       alert(toggleClass);
    //       // window.open(this.href, '_blank');
    //     });
    //   }
    // });
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
  setupUniversal: function() {
    pf.universal.setupExternalLinks();
    pf.universal.setupToggles();
  }
};

define(['jquery','common'], function() {
  pf.universal.setupUniversal();
});
