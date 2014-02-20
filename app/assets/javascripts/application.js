// Manifest file

// Set up the pf (prefab) object
// And create a list of when each module is required, based on jQuery/CSS selectors
// As well as a requireAll override for Jasmine tests etc.

var pf = {
  unsupported:        'data-pf-unsupported',
  requiredElements: {
    universal:        'body',
    validate:         'form.validatable',
    accordian:        'ul.accordian',
    google_map:        'div#google_map'
  },
  requireAll:         'body#require_all',
  requireSpecs:       'body#require_all.spec_runner',
  javascriptIndicatorClass:   'js',
  noJavascriptIndicatorClass: 'js_free',
  breakExecution: function() {
    throw new Error("This is not an error. We've chosen to disable javascript in this browser." );
  }
};

// Don't run any javascript for unsupported browsers
if (document.getElementsByTagName("html")[0].getAttribute(pf.unsupported) == 'true') {
  pf.breakExecution();
}

// First, switch JS toggle
document.getElementsByTagName('body')[0].className+=' ' + pf.javascriptIndicatorClass;
document.getElementsByTagName('body')[0].className = document.getElementsByTagName('body')[0].className.replace(pf.noJavascriptIndicatorClass,"");

// Set jQuery version based on older IE or not
var jQueryVersion = (!document.getElementById('ie')) ? "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min" : "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min";

// Require config
require.config({
  baseUrl:            '/assets/_prefab/',
  paths: {
    "jquery":         jQueryVersion,
    "common":         "general/common",
    "universal":      "general/universal",
    "validate":       "general/validate",
    "google_map":     "general/google_map",
    "accordian":      "general/accordian",
    "spec_runner":    "general/spec_runner",
    jasmine:          "jasmine/javascripts/jasmine",
    "jasmine-html":   "jasmine/javascripts/jasmine-html",
    spec:             "specs/"
  },
  shim: {
    jasmine: {
      exports:        "jasmine"
    },
    "jasmine-html": {
      deps:           ["jasmine"],
      exports:        "jasmine"
    }
  }
});

// Only require modules on pages they're needed
require(['jquery'], function() {
  // Then require other modules
  var requireAll = ($(pf.requireAll).length >0);
  $.each(pf.requiredElements, function(moduleName, requiredElement) {
    if($(requiredElement).length > 0 || requireAll) {
      require([moduleName], function() {});
    }
  });

  // Require Specs, for Spec Runner Page
  if ($(pf.requireSpecs).length > 0) {
    require(['spec_runner'], function() {});
  }
});
