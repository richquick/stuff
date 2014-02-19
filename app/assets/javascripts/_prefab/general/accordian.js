pf.accordian = {
  conventions: {
    accordianSelector:  'ul.accordian',
    expanderSelector:   '.expander',
    expandedClass:      'expanded'
  },
  setupAccordian: function() {
    $(pf.accordian.conventions.expanderSelector).click(function(){
      var $this = $(this);
      $this.closest(pf.accordian.conventions.accordianSelector).toggleClass(pf.accordian.conventions.expandedClass);
      return false;
    });
  }
};

define(['jquery','common'], function() {
  pf.accordian.setupAccordian();
});
