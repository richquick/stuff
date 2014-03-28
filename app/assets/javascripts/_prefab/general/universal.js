pf.universal = {
  conventions: {
    universalSelector:        'ul.universal',
    expanderSelector:         '.expander',
    expandedClass:            'expanded',
    toggleSelector:           'a.toggle',
    toggleClass:              'on',
    tooltipSelector:          '.tooltip',
    tooltipSnippet:           '<div class="tooltip holder">#{}</div>',
    lightboxSelector:         '.lightbox',
    lightboxHolder:           '.lightbox.holder',
    lightboxContent:          '.lightbox.holder .inner',
    lightboxCloser:           '.lightbox.holder .close, .lightbox.holder',
    lightboxSnippet:          '<div class="lightbox holder"><div class="inner"><div class="close">X</div><img src="#{}"></div></div>'
  },
  dataAttributes: {
    toggleTarget:             "data-pf-toggle-target",
    toggleClass:              "data-pf-toggle-class",
    toggleRemove:             "data-pf-toggle-remove",
    lightboxTarget:           "data-pf-lightbox-target"
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
  getLightboxTarget: function($element) {
    var attr = $element.attr(pf.universal.dataAttributes.lightboxTarget);
    return (typeof attr !== 'undefined' && attr !== false) ? attr : false;
  },
  getHref: function($element) {
    var attr = $element.attr('href');
    return (typeof attr !== 'undefined' && attr !== false && pf.common.isValidID(attr)) ? attr : false;
  },
  isUrlExternal: function(url) {
    return ((url.indexOf("http://") >= 0 || url.indexOf("https://") >= 0) && url.indexOf(pf.universal.getThisDomain()) < 0);
  },
  isTargetImage: function(url) {
    // MAJOR TECHDEBT
    return (url.indexOf(".jpg") >= 0 || url.indexOf(".png") >= 0  || url.indexOf(".png") >= 0);
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
  hasLightboxTarget: function($element) {
    return (pf.universal.getLightboxTarget($element) !== false);
  },
  hasHref: function($element) {
    return (pf.universal.getHref($element) !== false);
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
  getElementHeight: function($element) {
    return $element.height();
  },
  getWindowHeight: function() {
    return $(window).height();
  },
  setLightboxHolderVerticalOffset: function(offset) {
    // BIT OF TECHDEBT HERE
    if (offset < 10) {offset = 10};
    var unit = 'px';
    var value = offset + unit;
    $(pf.universal.conventions.lightboxContent).css("margin-top",value);
  },
  verticallyAlignLightboxContent: function() {
    var lightboxContentHeight = pf.universal.getElementHeight($(pf.universal.conventions.lightboxContent));
    var windowHeight = pf.universal.getWindowHeight();
    pf.universal.setLightboxHolderVerticalOffset((windowHeight - lightboxContentHeight)/2);
  },
  showLightbox: function() {
    $(pf.universal.conventions.lightboxHolder).addClass('on');
  },
  hideLightbox: function() {
    $(pf.universal.conventions.lightboxHolder).removeClass('on');
  },
  openLightbox: function(url) {
    // TECHDEBT - Lightboxes should be able to accmodate iFrames and embedded video too
    var snippet = pf.common.interpolateString(pf.universal.conventions.lightboxSnippet,url);
    $body.append(snippet);
    pf.universal.bindLightboxClosing();
    pf.universal.verticallyAlignLightboxContent();
    pf.universal.showLightbox();
  },
  removeLightbox: function() {
    $(pf.universal.conventions.lightboxHolder).remove();
  },
  closeLightbox: function() {
    pf.universal.hideLightbox();
    setTimeout(function(){
      pf.universal.removeLightbox();
    },1200);
  },
  bindLightboxClosing: function() {
    $(pf.universal.conventions.lightboxCloser).on("click", function(event){
      event.preventDefault();
      event.stopPropagation();
      pf.universal.closeLightbox();
    });
    $(":not(.x)",pf.universal.conventions.lightboxCloser).on("click", function(event){
      event.stopPropagation();
    });
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
        $this.attr('title','');
        var snippet = pf.common.interpolateString(pf.universal.conventions.tooltipSnippet,tooltipText);
        $this.append(snippet);
      }
    });
  },
  setupLightboxes: function() {
    $(pf.universal.conventions.lightboxSelector).each(function() {
      var $this = $(this);
      if (pf.universal.hasLightboxTarget($this)) {
        var target = (pf.universal.hasLightboxTarget($this)) ? pf.universal.getLightboxTarget($this) : pf.universal.getHref($this);
        if (pf.universal.isTargetImage(target)) {
          $this.click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            pf.universal.openLightbox(target);
          });
        }
      };
    });
  },
  setupUniversal: function() {
    pf.universal.setupExternalLinks();
    pf.universal.setupToggles();
    pf.universal.setupTooltips();
    pf.universal.setupLightboxes();
  }
};

define(['jquery','common'], function() {
  pf.universal.setupUniversal();
});
