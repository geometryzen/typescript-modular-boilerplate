require(["dist/typescript-modular-boilerplate/core"], function(x) {

  beforeEach(function() {
  });

  describe("VERSION", function(){
    it("should be 0.0.1", function() {
      expect(x.VERSION).toBe("0.0.1");
    });
  });

});
