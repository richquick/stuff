describe("pf:", function() {
  it("is an object", function() {
    expect(typeof pf).toEqual('object');
  });
});

describe("pf.common:", function() {
  it("is an object", function() {
    expect(typeof pf.common).toEqual('object');
  });
  describe("pf.common.idExists:", function() {
    it("is a function", function() {
      expect(typeof pf.common.idExists).toEqual('function');
    });
  });
  describe("pf.common.scrollToId:", function() {
    it("is a function", function() {
      expect(typeof pf.common.scrollToId).toEqual('function');
    });
  });
  describe("pf.common.interpolateString:", function() {
    it("is a function", function() {
      expect(typeof pf.common.interpolateString).toEqual('function');
    });
    it("should add a string into another string", function() {
      expect(pf.common.interpolateString('hello #{}','world')).toEqual('hello world');
    });
    it("should add a number into another string", function() {
      expect(pf.common.interpolateString('hello #{}','1')).toEqual('hello 1');
    });
    it("should add a string into another string with trailing spaces on the inner string", function() {
      expect(pf.common.interpolateString('hello #{}','   world')).toEqual('hello    world');
    });
    it("should add a string into another string with trailing spaces on the outer string", function() {
      expect(pf.common.interpolateString('  hello #{}  ','world')).toEqual('  hello world  ');
    });
    it("should leave outer string untouched if the outer string doesn't have a valid interpolation string", function() {
      expect(pf.common.interpolateString('hello #','aaa')).toEqual('hello #');
    });
  });
  describe("pf.common.stripTrailingSpaces:", function() {
    it("is a function", function() {
      expect(typeof pf.common.stripTrailingSpaces).toEqual('function');
    });
    it("should strip spaces from before string", function() {
      expect(pf.common.stripTrailingSpaces('   hello')).toEqual('hello');
    });
    it("should strip spaces from after string", function() {
      expect(pf.common.stripTrailingSpaces('hello   ')).toEqual('hello');
    });
    it("should strip spaces from before and after string", function() {
      expect(pf.common.stripTrailingSpaces('   hello   ')).toEqual('hello');
    });
    it("should leave strings without spaces untouched", function() {
      expect(pf.common.stripTrailingSpaces('hello')).toEqual('hello');
    });
  });
  describe("pf.common.stringToID:", function() {
    it("is a function", function() {
      expect(typeof pf.common.stringToID).toEqual('function');
    });
    it("should add a # before an ID", function() {
      expect(pf.common.stringToID('hello')).toEqual('#hello');
    });
    it("should fail if ID starts with number", function() {
      expect(pf.common.stringToID('1hello')).toEqual(false);
    });
    it("should fail if ID starts with -", function() {
      expect(pf.common.stringToID('-hello')).toEqual(false);
    });
    it("should fail if ID starts with _", function() {
      expect(pf.common.stringToID('_hello')).toEqual(false);
    });
    it("should fail if ID contains any characters other than letters, numbers, - or _", function() {
      expect(pf.common.stringToID('_hello')).toEqual(false);
    });
  });
  describe("pf.common.camelCaseToSnakeCase:", function() {
    it("is a function", function() {
      expect(typeof pf.common.camelCaseToSnakeCase).toEqual('function');
    });
  });
  describe("pf.common.snakeCaseToCamelCase:", function() {
    it("is a function", function() {
      expect(typeof pf.common.snakeCaseToCamelCase).toEqual('function');
    });
  });
  describe("pf.common.firstLetterToUpperCase:", function() {
    it("is a function", function() {
      expect(typeof pf.common.firstLetterToUpperCase).toEqual('function');
    });
  });
  describe("pf.common.firstLetterToLowerCase:", function() {
    it("is a function", function() {
      expect(typeof pf.common.firstLetterToLowerCase).toEqual('function');
    });
  });
  describe("pf.common.hasNoSpaces:", function() {
    describe("pf.common.hasNoSpaces:", function() {
    it("is a function", function() {
      expect(typeof pf.common.hasNoSpaces).toEqual('function');
    });
    it("should pass for letters", function() {
      expect(pf.common.hasNoSpaces('hello')).toEqual(true);
    });
    it("should pass for integers", function() {
      expect(pf.common.hasNoSpaces('12')).toEqual(true);
    });

    it("should pass for strings with spaces in", function() {
      expect(pf.common.hasNoSpaces('abc abc')).toEqual(false);
    });
  });
    it("is a function", function() {
      expect(typeof pf.common.hasTrailingPeriod).toEqual('function');
    });
  });
  describe("pf.common.addTrailingPeriod:", function() {
    it("is a function", function() {
      expect(typeof pf.common.addTrailingPeriod).toEqual('function');
    });
  });
  describe("pf.common.removeTrailingPeriod:", function() {
    it("is a function", function() {
      expect(typeof pf.common.removeTrailingPeriod).toEqual('function');
    });
  });
  describe("pf.common.stripLastCharacter:", function() {
    it("is a function", function() {
      expect(typeof pf.common.stripLastCharacter).toEqual('function');
    });
  });
  describe("pf.common.isNumber:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isNumber).toEqual('function');
    });
    it("should fail for letters", function() {
      expect(pf.common.isNumber('hello')).toEqual(false);
    });
    it("should pass for integers", function() {
      expect(pf.common.isNumber('12')).toEqual(true);
    });
    it("should pass for decimals", function() {
      expect(pf.common.isNumber('1.2')).toEqual(true);
    });
    it("should fail for empty string", function() {
      expect(pf.common.isNumber('')).toEqual(false);
    });
    it("should fail for string with just spaces", function() {
      expect(pf.common.isNumber('   ')).toEqual(false);
    });
  });
  describe("pf.common.isInteger:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isInteger).toEqual('function');
    });
    it("should fail for letters", function() {
      expect(pf.common.isInteger('hello')).toEqual(false);
    });
    it("should pass for integers", function() {
      expect(pf.common.isInteger('12')).toEqual(true);
    });
    it("should fail for decimals", function() {
      expect(pf.common.isInteger('1.2')).toEqual(false);
    });
    it("should fail for empty string", function() {
      expect(pf.common.isInteger('')).toEqual(false);
    });
    it("should fail for string with just spaces", function() {
      expect(pf.common.isInteger('   ')).toEqual(false);
    });
  });
  describe("pf.common.endsWithPeriod:", function() {
    it("is a function", function() {
      expect(typeof pf.common.endsWithPeriod).toEqual('function');
    });
  });
  describe("pf.common.isValidEmailAddress:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isValidEmailAddress).toEqual('function');
    });
    it("should pass for valid .com email", function() {
      expect(pf.common.isValidEmailAddress('this@that.com')).toEqual(true);
    });
    it("should pass for valid .co.uk email", function() {
      expect(pf.common.isValidEmailAddress('this@that.co.uk')).toEqual(true);
    });
    it("should pass for valid .edu email with .co.uk as subdomain", function() {
      expect(pf.common.isValidEmailAddress('this@that.co.uk.edu')).toEqual(true);
    });
    it("should pass for valid .com email with dot before @", function() {
      expect(pf.common.isValidEmailAddress('this.that@that.com')).toEqual(true);
    });
    it("should pass for valid .com email with ' before @", function() {
      expect(pf.common.isValidEmailAddress("this'that@that.com")).toEqual(true);
    });
    it("should fail for valid .com email with a . afterwards", function() {
      expect(pf.common.isValidEmailAddress('this@that.com.')).toEqual(false);
    });

    it("should fail for valid .com email with a , afterwards", function() {
      expect(pf.common.isValidEmailAddress('this@that.com,')).toEqual(false);
    });
    it("should fail for letters", function() {
      expect(pf.common.isValidEmailAddress('aaa')).toEqual(false);
    });
    it("should fail for empty string", function() {
      expect(pf.common.isValidEmailAddress('')).toEqual(false);
    });
    it("should fail for string with just spaces", function() {
      expect(pf.common.isValidEmailAddress('  ')).toEqual(false);
    });
  });
  describe("pf.common.isValidPhoneNumber:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isValidPhoneNumber).toEqual('function');
    });
    it("should pass for string of numbers", function() {
      expect(pf.common.isValidPhoneNumber('080000000')).toEqual(true);
    });
    it("should pass for + at front", function() {
      expect(pf.common.isValidPhoneNumber('+080000000')).toEqual(true);
    });
    it("should pass for brackets", function() {
      expect(pf.common.isValidPhoneNumber('(0800)000000')).toEqual(true);
    });
    it("should pass for dashes", function() {
      expect(pf.common.isValidPhoneNumber('800-0000-0000')).toEqual(true);
    });
    it("should fail for letters", function() {
      expect(pf.common.isValidPhoneNumber('aaa')).toEqual(false);
    });
    it("should fail for empty string", function() {
      expect(pf.common.isValidPhoneNumber('')).toEqual(false);
    });
    it("should fail for string with just spaces", function() {
      expect(pf.common.isValidPhoneNumber('  ')).toEqual(false);
    });
  });
  describe("pf.common.isValidID:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isValidID).toEqual('function');
    });
    it("should pass for strings containing letters", function() {
      expect(pf.common.isValidID('abcde')).toEqual(true);
    });
    it("should pass for strings containing numbers", function() {
      expect(pf.common.isValidID('abcde123')).toEqual(true);
    });
    it("should pass for strings containing _", function() {
      expect(pf.common.isValidID('abcde_')).toEqual(true);
    });
    it("should pass for strings containing -", function() {
      expect(pf.common.isValidID('abcde-')).toEqual(true);
    });
    it("should fail for empty string", function() {
      expect(pf.common.isValidID('')).toEqual(false);
    });
    it("should fail for strings starting with a number", function() {
      expect(pf.common.isValidID('1acbd')).toEqual(false);
    });
    it("should fail for strings starting with a _", function() {
      expect(pf.common.isValidID('_abcd')).toEqual(false);
    });
    it("should fail for strings starting with a -", function() {
      expect(pf.common.isValidID('-abcd')).toEqual(false);
    });
    it("should fail for strings starting with a #", function() {
      expect(pf.common.isValidID('#acbd')).toEqual(false);
    });
    it("should fail for strings containing characters other than letters, numbers, - and _", function() {
      expect(pf.common.isValidID('acbd%')).toEqual(false);
    });
  });
  describe("pf.common.isValidSubdomain:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isValidSubdomain).toEqual('function');
    });
    it("should pass for strings containing letters", function() {
      expect(pf.common.isValidSubdomain('abcde')).toEqual(true);
    });
    it("should pass for strings containing numbers", function() {
      expect(pf.common.isValidSubdomain('abcde123')).toEqual(true);
    });
    it("should fail for strings containing _", function() {
      expect(pf.common.isValidSubdomain('abcde_aaa')).toEqual(false);
    });
    it("should fail for strings containing -", function() {
      expect(pf.common.isValidSubdomain('abcde-aaa')).toEqual(false);
    });
    it("should fail for empty string", function() {
      expect(pf.common.isValidSubdomain('')).toEqual(false);
    });
    it("should fail for strings starting with a number", function() {
      expect(pf.common.isValidSubdomain('1acbd')).toEqual(false);
    });
    it("should fail for strings starting with a -", function() {
      expect(pf.common.isValidSubdomain('-abcd')).toEqual(false);
    });
    it("should fail for strings starting with a #", function() {
      expect(pf.common.isValidSubdomain('#acbd')).toEqual(false);
    });
    it("should fail for strings containing characters other than letters, numbers, and -", function() {
      expect(pf.common.isValidSubdomain('acbd%')).toEqual(false);
    });
  });
  describe("pf.common.isEmpty:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isEmpty).toEqual('function');
    });
    it("should pass for empty string", function() {
      expect(pf.common.isEmpty('')).toEqual(true);
    });
    it("should pass for string with just spaces", function() {
      expect(pf.common.isEmpty('  ')).toEqual(true);
    });
    it("should fail for string with letters", function() {
      expect(pf.common.isEmpty('aaa')).toEqual(false);
    });
    it("should fail for string with spaces around", function() {
      expect(pf.common.isEmpty(' aaa ')).toEqual(false);
    });
  });
  describe("pf.common.isEmptyOrNotRequired:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isEmptyOrNotRequired).toEqual('function');
    });
  });
  describe("pf.common.isFieldEmpty:", function() {
    it("is a function", function() {
      expect(typeof pf.common.isFieldEmpty).toEqual('function');
    });
    it("should pass if element has empty value", function() {
      expect(pf.common.isFieldEmpty($('<input type="text" value="">'))).toEqual(true);
    });
    it("should pass if element has just spaces in value", function() {
      expect(pf.common.isFieldEmpty($('<input type="text" value="   ">'))).toEqual(true);
    });
    it("should pass if element has no value attribute", function() {
      expect(pf.common.isFieldEmpty($('<input type="text">'))).toEqual(true);
    });
    it("should fail if element has a populated value", function() {
      expect(pf.common.isFieldEmpty($('<input type="text" value="test">'))).toEqual(false);
    });
  });
  describe("pf.common.addJavascriptIndicatorClassToBodyTag:", function() {
    it("is a function", function() {
      expect(typeof pf.common.addJavascriptIndicatorClassToBodyTag).toEqual('function');
    });
  });
  describe("pf.common.removeNoJavascriptIndicatorClassToBodyTag:", function() {
    it("is a function", function() {
      expect(typeof pf.common.removeNoJavascriptIndicatorClassToBodyTag).toEqual('function');
    });
  });
  describe("pf.common.setupCommon:", function() {
    it("is a function", function() {
      expect(typeof pf.common.setupCommon).toEqual('function');
    });
  });
});

