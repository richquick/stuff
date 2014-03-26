describe("pf.universal:", function() {
  it("is an object", function() {
    expect(typeof pf.universal).toEqual('object');
  });
  describe("pf.universal.setupUniversal:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.setupUniversal).toEqual('function');
    });
  });
  describe("pf.universal.setupTooltips:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.setupTooltips).toEqual('function');
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
  describe("pf.universal.getToggleTarget:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.getToggleTarget).toEqual('function');
    });
  });
  describe("pf.universal.getToggleClass:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.getToggleClass).toEqual('function');
    });
  });
  describe("pf.universal.getToggleRemove:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.getToggleRemove).toEqual('function');
    });
  });
  describe("pf.universal.hasToggleTarget:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.hasToggleTarget).toEqual('function');
    });
  });
  describe("pf.universal.hasToggleClass:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.hasToggleClass).toEqual('function');
    });
  });
  describe("pf.universal.hasToggleRemove:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.hasToggleRemove).toEqual('function');
    });
  });
  describe("pf.universal.doToggle:", function() {
    it("is a function", function() {
      expect(typeof pf.universal.doToggle).toEqual('function');
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
