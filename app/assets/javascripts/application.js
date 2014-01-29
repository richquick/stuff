// Manifest file

// Set up the pf (prefab) object
// And create a list of when each module is required, based on jQuery/CSS selectors
// As well as a requireAll override for Jasmine tests etc.

var pf = {
  requiredElements: {
    validate:         'form'
  },
  requireAll:         'body#require_all',
  requireSpecs:       'body#require_all.spec_runner'
};

// Set jQuery version based on older IE or not
var jQueryVersion = (!document.getElementById('ie')) ? "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min" : "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min";

// Require config
require.config({
  baseUrl:            '/assets/_prefab/',
  paths: {
    "jquery":         jQueryVersion,
    "common":         "general/common",
    "validate":       "general/validate",
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
  var requireAll = ($(pf.requireAll).length >0);
  $.each(pf.requiredElements, function(moduleName, requiredElement) {
    if($(requiredElement).length > 0 || requireAll) {
      require([moduleName], function(f) {
        f.init();
      });
    }
  });

  // Require Speces, for Spec Runner Page
  if ($(pf.requireSpecs).length > 0) {
    require(['spec_runner'], function(f) {
      f.init();
    });
  }
});
