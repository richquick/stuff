describe("pf.ajax:", function() {
  it("is an object", function() {
    expect(typeof pf.ajax).toEqual('object');
  });
  describe("pf.ajax.getJson:", function() {
    it("is a function", function() {
      expect(typeof pf.ajax.getJson).toEqual('function');
    });
  });
  describe("pf.ajax.getJsonSync:", function() {
    it("is a function", function() {
      expect(typeof pf.ajax.getJson).toEqual('function');
    });
  });
});
