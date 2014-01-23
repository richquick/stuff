// Manifest file

var pf = {
  requiredElements: {
    common: 'html',
    validate: 'form'
  }
};

require(["/assets/_prefab/general/validate.js"], function(validate) {
  validate.init();
});
