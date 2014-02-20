describe("pf.universal:", function() {
  it("is an object", function() {
    expect(typeof pf.universal).toEqual('object');
  });
  describe("pf.universal.setupUniversal:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.setupUniversal).toEqual('function');
    });
  });
  describe("pf.universal.setupExternalLinks:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.setupExternalLinks).toEqual('function');
    });
  });
  describe("pf.universal.getThisDomain:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.getThisDomain).toEqual('function');
    });
  });
  describe("pf.universal.isUrlExternal:", function() {
    var thisUrl = window.location.host;
    it("is a function", function() {
      expect(typeof pf.universal.isUrlExternal).toEqual('function');
    });
    it("should fail for a relative URL", function() {
      expect(pf.universal.isUrlExternal('/test/')).toEqual(false);
    });
    it("should fail for an absolute URL inside this domain", function() {
      expect(pf.universal.isUrlExternal('http://' + thisUrl + '/thispage/')).toEqual(false);
    });
    it("should fail for an absolute secure URL inside this domain", function() {
      expect(pf.universal.isUrlExternal('http://' + thisUrl + '/thispage/')).toEqual(false);
    });
    it("should pass for an absolute URL outside this domain", function() {
      expect(pf.universal.isUrlExternal('http://www.madeUpURL.com/thispage/')).toEqual(true);
    });
    it("should pass for an absolute secure URL outside this domain", function() {
      expect(pf.universal.isUrlExternal('https://www.madeUpURL.com/thispage/')).toEqual(true);
    });
  });
});
