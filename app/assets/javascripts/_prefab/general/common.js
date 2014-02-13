// Global JQuery Selectors - only for VERY Common uses
var $body = $('body');
var $html_body = $('html,body');

// Prototypes
Array.prototype.uniq = function(){
  return this.filter(
      function(a){return !this[a] ? this[a] = true : false;}, {}
  );
};

pf.common = {
  conventions: {
    emailRegex:                 /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
    phoneRegex:                 /[0-9]+/, // NOTE: Basic Validation for now - we don't need to go overboard
    interpolateString:          '#{}',
    javascriptIndicatorClass:   'js',
    noJavascriptIndicatorClass: 'js_free'
  },
  ui: {
    scrollToIdDelay:            150,
    scrollToIdTime:             500,
    scrollToIdOffset:           10
  },
  idExists: function(id) {
    return ($(pf.common.stringToID(id)).length > 0) // Boolean
  },
  scrollToId: function(id){
    if (pf.common.idExists(id)) {
      $html_body.delay(pf.common.ui.scrollToIdDelay).animate({
        scrollTop: $(pf.common.stringToID(id)).offset().top - pf.common.ui.scrollToIdOffset
      }, pf.common.ui.scrollToIdTime);
    }
  },
  interpolateString: function(string,value) {
    // TECHDEBT - COULD BE MORE FLEXIBLE
    var stringSections = string.split(pf.common.conventions.interpolateString);
    return (stringSections.join(value));
  },
  stripTrailingSpaces: function(string) {
    return ($.trim(string));
  },
  stripLastCharacter: function(string) {
    return (string.substring(0, string.length - 1));
  },
  stringToID: function(string) {
    return (pf.common.isValidID(string)) ? "#" + pf.common.stripTrailingSpaces(string) : false;
  },
  addTrailingPeriod: function(string) {
    return !(pf.common.hasTrailingPeriod(string)) ? string + "." : string;
  },
  removeTrailingPeriod: function(string) {
    return (pf.common.hasTrailingPeriod(string)) ? pf.common.stripLastCharacter(string) : string;
  },
  camelCaseToSnakeCase: function(string) {
    return string.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
  },
  snakeCaseToCamelCase: function(string) {
    return string.replace(/(\_\w)/g, function(m){return m[1].toUpperCase();});
  },
  firstLetterToUpperCase: function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  firstLetterToLowerCase: function(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  },
  isNumber: function(number) {
    return (!isNaN(number) && !pf.common.isEmpty(number)); // Return binary (true/false)
  },
  isInteger: function(number) {
    return (!isNaN(number) && number % 1 === 0 && !pf.common.isEmpty(number)); // Return binary (true/false)
  },
  endsWithPeriod: function(string) {
    return (string.slice(-1) == ".");
  },
  isValidEmailAddress: function(string) {
    var pattern = new RegExp(pf.common.conventions.emailRegex);
    return (pattern.test(string) && !pf.common.endsWithPeriod(string)); // Return binary (true/false)
  },
  isValidPhoneNumber: function(string) {
    // NOTE: Basic Validation for now - we don't need to go overboard, so Regex is basic
    var pattern = new RegExp(pf.common.conventions.phoneRegex);
    return pattern.test(string); // Return binary (true/false)
  },
  isValidID: function (testID) {
    return (/^[a-zA-Z][a-zA-Z0-9_-]+$/.test(testID)); // Return binary (true/false)
  },
  isValidSubdomain: function (string) {
    return (/^[a-z|A-Z][a-z|A-Z|0-9]+$/.test(string)); // Return binary (true/false)
  },
  isEmpty: function(string) {
    return (pf.common.stripTrailingSpaces(string).length <= 0); // Return binary (true/false)
  },
  hasNoSpaces: function(string) {
    return (string.split(" ").length == 1); // Return binary (true/false)
  },
  isEmptyOrNotRequired: function($element) {
    // TECHDEBT - Look at this - not convinced there's not a major issue here!!
    return (pf.common.isFieldEmpty($element) && !pf.validate.isRequired($element));
  },
  isFieldEmpty: function($element) {
    return (pf.common.isEmpty($element.val())); // Return binary (true/false)
  },
  hasTrailingPeriod: function(string) {
    return (string.slice(-1) == '.');
  },
  addJavascriptIndicatorClassToBodyTag: function() {
    $body.addClass(pf.common.conventions.javascriptIndicatorClass);
  },
  removeNoJavascriptIndicatorClassToBodyTag: function() {
    $body.removeClass(pf.common.conventions.noJavascriptIndicatorClass);
  },
  setupCommon: function() {
    pf.common.removeNoJavascriptIndicatorClassToBodyTag();
    pf.common.addJavascriptIndicatorClassToBodyTag();
  }
};

define(['jquery'], function() {
  pf.common.setupCommon();
});
