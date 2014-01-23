describe("jQuery:", function() {
  it("is a function", function() {
    expect(typeof jQuery).toEqual('function');
  });
});

describe("pf:", function() {
  it("is an object", function() {
    expect(typeof pf).toEqual('object');
  });
  describe("pf.common:", function() {
    it("is an object", function() {
      expect(typeof pf.common).toEqual('object');
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
    describe("pf.common.hasTrailingPeriod:", function() {
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
  });
  describe("pf.validate:", function() {
    it("is an object", function() {
      expect(typeof pf.validate).toEqual('object');
    });
    describe("pf.validate.removeRequiredIfOtherErrors:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.removeRequiredIfOtherErrors).toEqual('function');
      });
    });
    describe("pf.validate.substituteErrorMessages:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.substituteErrorMessages).toEqual('function');
      });
    });
    describe("pf.validate.sanitizeErrorMessages:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.sanitizeErrorMessages).toEqual('function');
      });
    });
    describe("pf.validate.joinErrorMessages:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.joinErrorMessages).toEqual('function');
      });
    });
    describe("pf.validate.processErrorMessageSubstitutions:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.processErrorMessageSubstitutions).toEqual('function');
      });
    });
    describe("pf.validate.processErrorMessages:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.processErrorMessages).toEqual('function');
      });
      it("should join arrays with spaces", function() {
        expect(pf.validate.processErrorMessages(["error message 1.","error message 2.","error message 3."])).toEqual('error message 1. error message 2. error message 3.');
      });
      it("should return the string if input is a string", function() {
        expect(pf.validate.processErrorMessages("notAnArray")).toEqual("notAnArray");
      });
      it("should fail if input is not an array or a string", function() {
        expect(pf.validate.processErrorMessages({key:"value"})).toEqual(false);
      });
    });
    describe("pf.validate.addError:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.addError).toEqual('function');
      });
    });
    describe("pf.validate.findParentHolder:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.findParentHolder).toEqual('function');
      });
    });
    describe("pf.validate.findLabelAfter:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.findLabelAfter).toEqual('function');
      });
    });
    describe("pf.validate.addErrorClasses:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.addErrorClasses).toEqual('function');
      });
    });
    describe("pf.validate.removeErrorClasses:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.removeErrorClasses).toEqual('function');
      });
    });
    describe("pf.validate.createErrorMessageHolder:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.createErrorMessageHolder).toEqual('function');
      });
    });
    describe("pf.validate.checkForErrorMessageHolder:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.checkForErrorMessageHolder).toEqual('function');
      });
    });
    describe("pf.validate.writeErrorMessage:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.writeErrorMessage).toEqual('function');
      });
    });
    describe("pf.validate.isRequired:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.isRequired).toEqual('function');
      });
      it("should pass for required field", function() {
        expect(pf.validate.isRequired($('<input type="phone" required value="test">'))).toEqual(true);
      });
      it("should fail for a non-required field", function() {
        expect(pf.validate.isRequired($('<input type="phone" value="test">'))).toEqual(false);
      });
    });
    describe("pf.validate.isRequiredCheckbox:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.isRequiredCheckbox).toEqual('function');
      });
      it("should pass for required checkbox field", function() {
        expect(pf.validate.isRequiredCheckbox($('<input type="checkbox" required value="test">'))).toEqual(true);
      });
      it("should fail for a required field that's not a checkbox", function() {
        expect(pf.validate.isRequiredCheckbox($('<input type="text" required value="test">'))).toEqual(false);
      });
      it("should fail for a non-required field", function() {
        expect(pf.validate.isRequiredCheckbox($('<input type="checkbox" value="test">'))).toEqual(false);
      });
    });

    describe("pf.validate.isEmailField:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.isEmailField).toEqual('function');
      });
      it("should pass for email input tag", function() {
        expect(pf.validate.isEmailField($('<input type="email">'))).toEqual(true);
      });
      it("should fail for text input tag", function() {
        expect(pf.validate.isEmailField($('<input type="text">'))).toEqual(false);
      });
      it("should fail for non input tag with type=email", function() {
        expect(pf.validate.isEmailField($('<a type="text">'))).toEqual(false);
      });
    });
    describe("pf.validate.isPhoneField:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.isPhoneField).toEqual('function');
      });
      it("should pass for phone input tag", function() {
        expect(pf.validate.isPhoneField($('<input type="phone">'))).toEqual(true);
      });
      it("should fail for text input tag", function() {
        expect(pf.validate.isPhoneField($('<input type="text">'))).toEqual(false);
      });
      it("should fail for non input tag with type=email", function() {
        expect(pf.validate.isPhoneField($('<a type="email">'))).toEqual(false);
      });
    });
    describe("pf.validate.isPasswordField:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.isPasswordField).toEqual('function');
      });
      it("should pass for password input tag", function() {
        expect(pf.validate.isPasswordField($('<input type="password">'))).toEqual(true);
      });
      it("should fail for text input tag", function() {
        expect(pf.validate.isPasswordField($('<input type="text">'))).toEqual(false);
      });
      it("should fail for non input tag with type=email", function() {
        expect(pf.validate.isPasswordField($('<a type="email">'))).toEqual(false);
      });
    });
    describe("pf.validate.isValidEmailField:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.isValidEmailField).toEqual('function');
      });
      it("should pass for email input tag with valid email", function() {
        expect(pf.validate.isValidEmailField($('<input type="email" value="hello@this.com">'))).toEqual(true);
      });
      it("should pass for text input tag with valid email", function() {
        expect(pf.validate.isValidEmailField($('<input type="text" value="hello@this.com">'))).toEqual(true);
      });
      it("should fail for email input tag with invalid email", function() {
        expect(pf.validate.isValidEmailField($('<input type="email" value="hello@this,com">'))).toEqual(false);
      });
    });
    describe("pf.validate.isValidPhoneField:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.isValidPhoneField).toEqual('function');
      });
      it("should pass for phone input tag with valid phone number", function() {
        expect(pf.validate.isValidPhoneField($('<input type="phone" value="(0845)313131">'))).toEqual(true);
      });
      it("should pass for text input tag with valid phone number", function() {
        expect(pf.validate.isValidPhoneField($('<input type="text" value="(0845)313131">'))).toEqual(true);
      });
      it("should fail for phone input tag with invalid phone number", function() {
        expect(pf.validate.isValidPhoneField($('<input type="phone" value="hello@this.com">'))).toEqual(false);
      });
    });
    describe("pf.validate.hasFieldType:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.hasFieldType).toEqual('function');
      });
    });
    describe("pf.validate.hasMinLength:", function() {
      var dataVal = 4;
      var dataAttr = pf.validate.dataAttributes.minLength;
      it("is a function", function() {
        expect(typeof pf.validate.hasMinLength).toEqual('function');
      });
      it("should pass if element has the data attribute", function() {
        expect(pf.validate.hasMinLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaaa">'))).toEqual(true);
      });
      it("should fail if element doesn't have the data attribute", function() {
        expect(pf.validate.hasMinLength($('<input type="text" value="a">'))).toEqual(false);
      });
    });
    describe("pf.validate.hasMaxLength:", function() {
      var dataVal = 4;
      var dataAttr = pf.validate.dataAttributes.maxLength;
      it("is a function", function() {
        expect(typeof pf.validate.hasMaxLength).toEqual('function');
      });
      it("should pass if element has the data attribute", function() {
        expect(pf.validate.hasMaxLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaaa">'))).toEqual(true);
      });
      it("should fail if element doesn't have the data attribute", function() {
        expect(pf.validate.hasMaxLength($('<input type="text" value="a">'))).toEqual(false);
      });
    });
    describe("pf.validate.hasCustomValidation:", function() {
      var dataVal = true;
      var dataAttr = pf.validate.dataAttributes.customValidation;
      it("is a function", function() {
        expect(typeof pf.validate.hasCustomValidation).toEqual('function');
      });
      it("should pass if element has the data attribute", function() {
        expect(pf.validate.hasCustomValidation($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="test">'))).toEqual(true);
      });
      it("should fail if element doesn't have the data attribute", function() {
        expect(pf.validate.hasCustomValidation($('<input type="text" value="test">'))).toEqual(false);
      });
    });
    describe("pf.validate.shouldBeNumber:", function() {
      var dataVal = true;
      var dataAttr = pf.validate.dataAttributes.shouldBeNumber;
      it("is a function", function() {
        expect(typeof pf.validate.shouldBeNumber).toEqual('function');
      });
      it("should pass if element has the data attribute", function() {
        expect(pf.validate.shouldBeNumber($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="test">'))).toEqual(true);
      });
      it("should fail if element doesn't have the data attribute", function() {
        expect(pf.validate.shouldBeNumber($('<input type="text" value="test">'))).toEqual(false);
      });
    });
    describe("pf.validate.shouldBeInteger:", function() {
      var dataVal = true;
      var dataAttr = pf.validate.dataAttributes.shouldBeInteger;
      it("is a function", function() {
        expect(typeof pf.validate.shouldBeInteger).toEqual('function');
      });
      it("should pass if element has the data attribute", function() {
        expect(pf.validate.shouldBeInteger($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="test">'))).toEqual(true);
      });
      it("should fail if element doesn't have the data attribute", function() {
        expect(pf.validate.shouldBeInteger($('<input type="text" value="test">'))).toEqual(false);
      });
    });
    describe("pf.validate.shouldMatch:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.shouldMatch).toEqual('function');
      });
    });
    describe("pf.validate.needsToBeMatched:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.needsToBeMatched).toEqual('function');
      });
    });
    describe("pf.validate.getMatchIDFromErrorMessage:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.getMatchIDFromErrorMessage).toEqual('function');
      });
    });
    describe("pf.validate.getFieldType:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.getFieldType).toEqual('function');
      });
    });
    describe("pf.validate.getMinLength:", function() {
      var dataVal = '4';
      var dataAttr = pf.validate.dataAttributes.minLength;
      it("is a function", function() {
        expect(typeof pf.validate.getMinLength).toEqual('function');
      });
      it("should return the dataAttribute's value", function() {
        expect(pf.validate.getMinLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="test">'))).toEqual(dataVal);
      });
    });
    describe("pf.validate.getMaxLength:", function() {
      var dataVal = '4';
      var dataAttr = pf.validate.dataAttributes.maxLength;
      it("is a function", function() {
        expect(typeof pf.validate.getMaxLength).toEqual('function');
      });
      it("should return the dataAttribute's value", function() {
        expect(pf.validate.getMaxLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="test">'))).toEqual(dataVal);
      });
    });
    describe("pf.validate.validateRequired:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.validateRequired).toEqual('function');
      });
      it("should pass for required field that's populated", function() {
        expect(pf.validate.validateRequired($('<input type="phone" required value="test@this.com">'))).toEqual(true);
      });
      it("should fail for a required field that's empty", function() {
        expect(pf.validate.validateRequired($('<input type="phone" required value="">'))).toEqual(false);
      });
      it("should fail for a required field that's just got spaces", function() {
        expect(pf.validate.validateRequired($('<input type="phone" required value="">'))).toEqual(false);
      });
    });
    describe("pf.validate.validateRequiredCheckbox:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.validateRequiredCheckbox).toEqual('function');
      });
      it("should pass for required field that's checked", function() {
        expect(pf.validate.validateRequiredCheckbox($('<input type="checkbox" required checked value="test@this.com">'))).toEqual(true);
      });
      it("should fail for a required field that's not checked", function() {
        expect(pf.validate.validateRequiredCheckbox($('<input type="checkbox" required value="">'))).toEqual(false);
      });
    });
    describe("pf.validate.validateEmail:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.validateEmail).toEqual('function');
      });
      it("should pass for valid email addresses", function() {
        expect(pf.validate.validateEmail($('<input type="phone" value="test@this.com">'))).toEqual(true);
      });
      it("should pass for empty value", function() {
        expect(pf.validate.validateEmail($('<input type="phone" value="">'))).toEqual(true);
      });
      it("should pass for value with just spaces", function() {
        expect(pf.validate.validateEmail($('<input type="phone" value="   ">'))).toEqual(true);
      });
      it("should fail for invalid email addresses", function() {
        expect(pf.validate.validateEmail($('<input type="phone" value="test">'))).toEqual(false);
      });
    });
    describe("pf.validate.validatePhone:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.validatePhone).toEqual('function');
      });
      it("should pass for valid phone numbers", function() {
        expect(pf.validate.validatePhone($('<input type="phone" value="(0800)636363">'))).toEqual(true);
      });
      it("should pass for empty value", function() {
        expect(pf.validate.validatePhone($('<input type="phone" value="">'))).toEqual(true);
      });
      it("should pass for value with just spaces", function() {
        expect(pf.validate.validatePhone($('<input type="phone" value="   ">'))).toEqual(true);
      });
      it("should fail for invalid phone numbers", function() {
        expect(pf.validate.validatePhone($('<input type="phone" value="test">'))).toEqual(false);
      });
    });
    describe("pf.validate.validateMinLength:", function() {
      var dataVal = 4;
      var dataAttr = pf.validate.dataAttributes.minLength;
      it("is a function", function() {
        expect(typeof pf.validate.validateMinLength).toEqual('function');
      });
      it("should pass if the value has more characters than the minimum", function() {
        expect(pf.validate.validateMinLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaaa">'))).toEqual(true);
      });
      it("should pass if the value has the same characters as the minimum", function() {
        expect(pf.validate.validateMinLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaa">'))).toEqual(true);
      });
      it("should fail if the value has the less characters than the minimum", function() {
        expect(pf.validate.validateMinLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="a">'))).toEqual(false);
      });
    });
    describe("pf.validate.validateMaxLength:", function() {
      var dataVal = 4;
      var dataAttr = pf.validate.dataAttributes.maxLength;
      it("is a function", function() {
        expect(typeof pf.validate.validateMaxLength).toEqual('function');
      });
      it("should fail if the value has more characters than the maximum", function() {
        expect(pf.validate.validateMaxLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaaa">'))).toEqual(false);
      });
      it("should pass if the value has the same characters as the maximum", function() {
        expect(pf.validate.validateMaxLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaa">'))).toEqual(true);
      });
      it("should pass if the value has the less characters than the maximum", function() {
        expect(pf.validate.validateMaxLength($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="a">'))).toEqual(true);
      });
    });
    describe("pf.validate.validateThatValueMatches:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.validateThatValueMatches).toEqual('function');
      });
    });
    describe("pf.validate.validateNumber:", function() {
      var dataVal = true;
      var dataAttr = pf.validate.dataAttributes.number;
      it("is a function", function() {
        expect(typeof pf.validate.validateNumber).toEqual('function');
      });
      it("should pass for an integer", function() {
        expect(pf.validate.validateNumber($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="1">'))).toEqual(true);
      });
      it("should pass for a float", function() {
        expect(pf.validate.validateNumber($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="1.1">'))).toEqual(true);
      });
      it("should fail for letters", function() {
        expect(pf.validate.validateNumber($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaaa">'))).toEqual(false);
      });
    });
    describe("pf.validate.validateInteger:", function() {
      var dataVal = true;
      var dataAttr = pf.validate.dataAttributes.integer;
      it("is a function", function() {
        expect(typeof pf.validate.validateInteger).toEqual('function');
      });
      it("should pass for an integer", function() {
        expect(pf.validate.validateInteger($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="1">'))).toEqual(true);
      });
      it("should fail for a float", function() {
        expect(pf.validate.validateInteger($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="1.1">'))).toEqual(false);
      });
      it("should fail for letters", function() {
        expect(pf.validate.validateInteger($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaaa">'))).toEqual(false);
      });
    });
    describe("pf.validate.validateCustom:", function() {
      var dataVal = ",";
      var dataAttr = pf.validate.dataAttributes.customValidation;
      it("is a function", function() {
        expect(typeof pf.validate.validateCustom).toEqual('function');
      });
      it("should return false for matching regex", function() {
        expect(pf.validate.validateCustom($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="A,B">'))).toEqual(false);
      });
      it("should return false for an empty value", function() {
        expect(pf.validate.validateCustom($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="">'))).toEqual(false);
      });
      it("should return false for a value with just spaces", function() {
        expect(pf.validate.validateCustom($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="   ">'))).toEqual(false);
      });
      it("should return something that's not false for a value that doesn't match the Regex", function() {
        expect(pf.validate.validateCustom($('<input type="text" ' + dataAttr + '="' + dataVal + '" value="aaaaa">'))).toBeTruthy();
      });
    });
    describe("pf.validate.validate:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.validate).toEqual('function');
      });
    });
    describe("pf.validate.validateAll:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.validateAll).toEqual('function');
      });
    });
    describe("pf.validate.setupValidation:", function() {
      it("is a function", function() {
        expect(typeof pf.validate.setupValidation).toEqual('function');
      });
    });
  });
});
