define(['jquery', 'jasmine-html'], function($, jasmine){
  var specs = [];
  var specConfig = {
    path:     "spec/",
    suffix:   "_spec",
    specs:    [
      "_dependencies",
      "common",
      "validate"
    ]
  }

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  $.each(specConfig.specs, function(key, spec) {
    specs.push(specConfig.path + spec + specConfig.suffix);
  });

  $(function(){
    require(specs, function(){
      jasmineEnv.execute();
    });
  });
});
