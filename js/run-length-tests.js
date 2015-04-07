(function(){
  'use strict';
  describe("Run length", function() {
    it("Should return 2a1c3b for aacbbb", function() {
      var runLength = new RunLength('aacbbb');

      expect(typeof runLength.encodedString).toBe(typeof []);
      expect(runLength.encode).toBeDefined();
      expect(typeof runLength.encode).toBe(typeof (function(){}));
      expect(runLength.encode()).toBe('2a1c3b');
      expect(runLength.encodedString).toBe('2a1c3b');

    });

    it("Should return qqqqaaaaa  for 4q5a", function() {
      var runLength = new RunLength('4q5a');

      expect(runLength.decode).toBeDefined();
      expect(typeof runLength.decode).toBe(typeof (function(){}));
      expect(runLength.decode()).toBe('qqqqaaaaa');
      expect(runLength.decodedString).toBe('qqqqaaaaa');

    });

    it("Should return swett for 1s1w1e2t", function() {
      var runLength = new RunLength('swett');

      expect(runLength.encodedString).toBe(null);
      expect(typeof runLength).toBe(typeof {});
      expect(runLength.encode).toBeDefined();
      expect(typeof runLength.encode).toBe(typeof (function(){}));
      expect(runLength.encode()).toBe('1s1w1e2t');
      expect(runLength.encodedString).toBe('1s1w1e2t');

    });



    it("Should return qqqqaaaaaqq  for 4q5a2q", function() {
      var runLength = new RunLength('4q5a2q');

      expect(runLength.decodedString).toBe(null);
      expect(runLength.decode).toBeDefined();
      expect(typeof runLength.decode).toBe(typeof (function(){}));
      expect(runLength.decode()).toBe('qqqqaaaaaqq');
      expect(runLength.decodedString).toBe('qqqqaaaaaqq');
      expect(runLength.decodedLetters).toEqual(["q", "a", "q"]);

    });

    it("Should return 2a1c3b4a for aacbbbaaaa", function() {
      var runLength = new RunLength('aacbbbaaaa');

      expect(runLength.encode).toBeDefined();
      expect(typeof runLength.encode).toBe(typeof (function(){}));
      expect(runLength.encode()).toBe('2a1c3b4a');
      expect(runLength.encodedString).toBe('2a1c3b4a');

    });


    it("Should return yyyjkstd  for 3y1j1k1s1t1d", function() {
      var runLength = new RunLength('3y1j1k1s1t1d');

      expect(runLength.decodedString).toBe(null);
      expect(runLength.decode).toBeDefined();
      expect(typeof runLength.decode).toBe(typeof (function(){}));
      expect(runLength.decode()).toBe('yyyjkstd');
      expect(runLength.decodedString).toBe('yyyjkstd');

      expect(runLength.decodedLength).toEqual(["3", "1", "1", "1", "1", "1"]);
      expect(runLength.decodedLetters).toEqual(["y", "j", "k", "s", "t", "d"]);

    });

  });
})();