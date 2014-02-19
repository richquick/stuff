pf.universal = {
  conventions: {
    universalSelector:  'ul.universal',
    expanderSelector:   '.expander',
    expandedClass:      'expanded'
  },
  isUrlExternal: function(url) {
    return ((url.indexOf("http://") >= 0 || url.indexOf("https://") >= 0) && url.indexOf(pf.universal.getThisDomain()) < 0);
  },
  getThisDomain: function() {
    return window.location.host;
  },
  setupExternalLinks: function() {
    $('a[href]').each(function() {
      $this = $(this);
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
  }
};

define(['jquery','common'], function() {
  pf.universal.setupUniversal();
});
