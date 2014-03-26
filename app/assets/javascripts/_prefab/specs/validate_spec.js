describe("pf.validate:", function() {
  it("is an object", function() {
    expect(typeof pf.validate).toEqual('object');
  });
  describe("pf.validate.processErrorMessages:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.processErrorMessages).toEqual('function');
    });
    it("should return 1-long as though they were strings", function() {
      expect(pf.validate.processErrorMessages(["error message 1"])).toEqual('Error message 1');
    });
    it("should capitalize first letter", function() {
      expect(pf.validate.processErrorMessages(["error message 1"])).toEqual('Error message 1');
    });
    it("should remove full-stops from error messages", function() {
      expect(pf.validate.processErrorMessages(["error message 1.","error message 2.","error message 3."])).toEqual('Error message 1, error message 2, and error message 3');
    });
    it("should join 2-long arrays with and", function() {
      expect(pf.validate.processErrorMessages(["error message 1","error message 2"])).toEqual('Error message 1 and error message 2');
    });
    it("should join 3-long arrays with comma + and", function() {
      expect(pf.validate.processErrorMessages(["error message 1","error message 2","error message 3"])).toEqual('Error message 1, error message 2, and error message 3');
    });
    it("should join 4-long arrays with commas + and", function() {
      expect(pf.validate.processErrorMessages(["error message 1","error message 2","error message 3","error message 4"])).toEqual('Error message 1, error message 2, error message 3, and error message 4');
    });
    it("should return the string if input is a string", function() {
      expect(pf.validate.processErrorMessages("notAnArray")).toEqual("notAnArray");
    });
    it("should fail if input is not an array or a string", function() {
      expect(pf.validate.processErrorMessages({key:"value"})).toEqual(false);
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
  describe("pf.validate.isPasswordField:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.isPasswordField).toEqual('function');
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
  describe("pf.validate.isValidSubdomainField:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.isValidSubdomainField).toEqual('function');
    });
    it("should pass for input tag with subdomain dataAttribute & valid value", function() {
      expect(pf.validate.isValidSubdomainField($('<input type="text" value="a123" ' + pf.validate.dataAttributes.fieldType + '="subdomain">'))).toEqual(true);
    });
    it("should fail for input tag with subdomain dataAttribute but no value", function() {
      expect(pf.validate.isValidSubdomainField($('<input type="text" ' + pf.validate.dataAttributes.fieldType + '="subdomain">'))).toEqual(false);
    });
    it("should fail for text input tag without subdomain dataAttribute", function() {
      expect(pf.validate.isValidSubdomainField($('<input type="text">'))).toEqual(false);
    });
  });
  describe("pf.validate.isSubdomainField:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.isSubdomainField).toEqual('function');
    });
    it("should pass for tag with subdomain field type", function() {
      expect(pf.validate.isSubdomainField($('<input ' + pf.validate.dataAttributes.fieldType + '="subdomain">'))).toEqual(true);
    });
    it("should fail for without subdomain field type", function() {
      expect(pf.validate.isSubdomainField($('<input type="email">'))).toEqual(false);
    });
  });
  describe("pf.validate.removeRequiredIfOtherErrors:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.removeRequiredIfOtherErrors).toEqual('function');
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
  describe("pf.validate.hasNoSpaces:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.hasNoSpaces).toEqual('function');
    });
    it("should pass for an input tag with just letters in it", function() {
      expect(pf.validate.hasNoSpaces($('<input type="text" value="asdasdas">'))).toEqual(true);
    });
    it("should pass for an empty input tag", function() {
      expect(pf.validate.hasNoSpaces($('<input type="text" value="">'))).toEqual(true);
    });
    it("should fail for an input tag with letters and spaces in it", function() {
      expect(pf.validate.hasNoSpaces($('<input type="text" value="this should fail">'))).toEqual(false);
    });
  });
  describe("pf.validate.shouldNotHaveSpaces:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.shouldNotHaveSpaces).toEqual('function');
    });
    it("should pass for an input tag with the shouldNotHaveSpaces attribute set", function() {
      expect(pf.validate.shouldNotHaveSpaces($('<input type="text" value="hi" data-pf-should-not-have-spaces="true">'))).toEqual(true);
    });
    it("should pass for an inout tag without the shouldNotHaveSpaces attribute set", function() {
      expect(pf.validate.shouldNotHaveSpaces($('<input type="text" value="hi">'))).toEqual(false);
    });
  });
  describe("pf.validate.validateNoSpaces:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.validateNoSpaces).toEqual('function');
    });
    it("should pass for an input tag with just letters in it", function() {
      expect(pf.validate.validateNoSpaces($('<input type="text" value="asdasdas">'))).toEqual(true);
    });
    it("should pass for an empty input tag", function() {
      expect(pf.validate.validateNoSpaces($('<input type="text" value="">'))).toEqual(true);
    });
    it("should fail for an input tag with letters and spaces in it", function() {
      expect(pf.validate.validateNoSpaces($('<input type="text" value="this should fail">'))).toEqual(false);
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
  describe("pf.validate.addError:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.addError).toEqual('function');
    });
  });
  describe("pf.validate.beforeFormSubmits:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.beforeFormSubmits).toEqual('function');
    });
  });
  describe("pf.validate.submitButtonHasWaitingText:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.submitButtonHasWaitingText).toEqual('function');
    });
  });
  describe("pf.validate.setWaitingState:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.setWaitingState).toEqual('function');
    });
  });
  describe("pf.validate.toggleWaitingState:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.toggleWaitingState).toEqual('function');
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

  describe("pf.validate.isSubstitionField:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.isSubstitutionField).toEqual('function');
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
  describe("pf.validate.getFieldTypeForSubsitution:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.getFieldTypeForSubsitution).toEqual('function');
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
  describe("pf.validate.validateSubdomain:", function() {
    it("is a function", function() {
      expect(typeof pf.validate.validateSubdomain).toEqual('function');
    });
    it("should pass for valid subdomain", function() {
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="aaaaa">'))).toEqual(true);
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="aaaaa123">'))).toEqual(true);
    });
    it("should fail if has any character other than letters numbers and -", function() {
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="aaaaa_">'))).toEqual(false);
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="aaaaa1%">'))).toEqual(false);
    });
    it("should fail if subdomain starts or ends with -", function() {
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="-aaaaa">'))).toEqual(false);
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="aaaaa-">'))).toEqual(false);
    });
    it("should fail if subdomain starts with numbers", function() {
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="1aaaaa">'))).toEqual(false);
    });
    it("should pass for empty value", function() {
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="">'))).toEqual(true);
    });
    it("should pass for value with just spaces", function() {
      expect(pf.validate.validateSubdomain($('<input type="text"  ' + pf.validate.dataAttributes.fieldType + '="subdomain" value="   ">'))).toEqual(true);
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
