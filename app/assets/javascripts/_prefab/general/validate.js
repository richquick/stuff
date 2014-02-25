// WIP - Passwords with spaces

// To do later - scrollTo, dates, telephone, live validation, get specs hooked up to Rake / Rspec / PhantomJS
pf.validate = {
  formFieldsList: [
    "input",
    "textarea"
  ],
  stateHolder: {
    // TECHDEBT - Will this work with more than one form on the page?
    originalButtonText:       {
    }
  },
  errorMessages: {
    Required:                 "fill out this field",
    Email:                    "give us a valid email address",
    Matches:                  "make sure fields match",
    MinLength:                "use at least #{} characters",
    NoSpaces:                 "don't use spaces",
    Subdomain:                "choose a valid subdomain",
    MaxLength:                "use fewer than #{} characters",
    CustomValidationDefault:  "check this field, there's a problem with it",
    RequiredCheckbox:         "check this checkbox before continuing",
    Number:                   "use a number in this field",
    Integer:                  "use a whole number in this field",
    fieldTypesForSubsitions:   {
      'isPasswordField':      "password",
      'shouldBeNumber':       "number",
      'shouldBeInteger':      "integer"
    },
    substitutions: {
      'name': {
        Required:             "tell us your name"
      },
      'firstName': {
        Required:             "tell us your first name"
      },
      'lastName': {
        Required:             "tell us your last name"
      },
      'password': {
        Required:             "enter your password",
        NoSpaces:             "don't use spaces in your password",
        MinLength:            "use a password with at least #{} characters",
        MaxLength:            "use a password with no more than #{} characters",
        Matches:              "make sure passwords match"
      },
      'subdomain': {
        Required:             "choose a valid subdomain"
      },
      'number': {
        Matches:              "make sure numbers match (with other field)"
      },
      'integer': {
        Matches:              "make sure numbers match"
      }
    },
  },
  dataAttributes: {
    customValidation:         "data-pf-custom-validation",
    customValidationMessage:  "data-pf-custom-validation-message",
    fieldType:                "data-pf-field-type",
    minLength:                "data-pf-min-length",
    maxLength:                "data-pf-max-length",
    shouldMatch:              "data-pf-should-match",
    shouldBeInteger:          "data-pf-should-be-integer",
    shouldBeNumber:           "data-pf-should-be-number",
    shouldNotHaveSpaces:      "data-pf-should-not-have-spaces",
    waitingText:              "data-pf-waiting-text",
    elementIdentifier:        "data-pf-element-identifier"
  },
  snippets: {
    errorMessageHolder:       '<div class="error message"></div>',
    matchElementIDHolder:     '<span style="display:none;" class="matchElementID" rel="#{}">&nbsp;</span>'
  },
  conventions: {
    submitButton:             "button[type='submit']",
    waitingClass:             "waiting",
    parentHolder:             ".segment, .segment .content",
    parentHolderErrorClass:   "error",
    errorMessageHolderClass:  ".error.message",
    errorMessageSeparator:    " ",
    matchElementID: {
      error: {
        indicator:            'class="matchElementID"',
        regex:                /rel="[^"]+/,
        initialTrim:          5
      }
    }
  },
  removeRequiredIfOtherErrors: function(errorMessageArray,fieldType) {
    // Remove "Required" error message if there are any other messages
    if (errorMessageArray.length > 1) {
      if (!fieldType) {
        // If there's no fieldtype there's no substitutions so use default
        if(errorMessageArray.indexOf(pf.validate.errorMessages.Required) === 0) {
          errorMessageArray.splice(errorMessageArray.indexOf(pf.validate.errorMessages.Required),1);
        }
      } else {
        // Removed the required field for this fieldType
        var substitutionHash = pf.validate.errorMessages.substitutions[fieldType];
        $.each(substitutionHash, function(substitutionName, substitutionValue) {
          if (substitutionValue.Required !== 'undefined' && substitutionValue.Required !== false) {
            if(errorMessageArray.indexOf(substitutionValue) === 0) {
              errorMessageArray.splice(errorMessageArray.indexOf(substitutionValue),1);
            }
          }
        });
      }
    }
    return errorMessageArray;
  },
  sanitizeErrorMessages: function(errorMessageArray,fieldType) {
    return pf.validate.removeRequiredIfOtherErrors(errorMessageArray,fieldType);
  },
  joinErrorMessages: function(errorMessageArray) {
    var e = [];
    $.each(errorMessageArray, function(index, errorMessage) {
      if (index === 0) {
        errorMessage = pf.common.firstLetterToUpperCase(errorMessage); // Capitalise first letter of first error message
      }
      if (index == errorMessageArray.length - 1) {
        e.push(pf.common.removeTrailingPeriod(errorMessage)); // Remove period from last error message
      } else if (index === 0 && errorMessageArray.length == 2) {
        e.push(pf.common.removeTrailingPeriod(errorMessage) + " and"); // Add 'and' to last error message of 2
      } else if (index === 0) {
        e.push(pf.common.removeTrailingPeriod(errorMessage) + ","); // Add comma to first error message (3 or more total messages)
      } else if (index == errorMessageArray.length - 2) {
        e.push(pf.common.removeTrailingPeriod(errorMessage) + ", and"); // Add ', and' to second to last message (3 or more total messages)
      } else if (index > 0) {
        e.push(pf.common.removeTrailingPeriod(errorMessage) + ","); // Else add comma to any message that's not the first one
      }
    });
    return e.join(pf.validate.conventions.errorMessageSeparator);
  },
  processErrorMessages: function(errorMessageArray,fieldType) {
    if ($.isArray(errorMessageArray)) {
      return (pf.validate.joinErrorMessages(pf.validate.sanitizeErrorMessages(errorMessageArray,fieldType)));
    } else if (typeof(errorMessageArray) == 'string') {
      return errorMessageArray;
    } else {
      return false;
    }
  },
  addError: function($element,errorMessage) {
    var $parent = pf.validate.findParentHolder($element); // Find the parent Holder

    if (!pf.validate.checkForErrorMessageHolder($parent)) {
      pf.validate.createErrorMessageHolder($element);
    } // Check if the error message container exists, and create it if not

    pf.validate.writeErrorMessage($parent,errorMessage); // Update the error message
    pf.validate.addErrorClasses($parent); // Add error class to the parent

    // Does the error class need to be matched?
    if (pf.validate.needsToBeMatched(errorMessage)) {
      var $matchedElement = $(pf.common.stringToID(pf.validate.needsToBeMatched(errorMessage)));
      pf.validate.addErrorClasses(pf.validate.findParentHolder($matchedElement)); // Find parent of matched element and add error class
    }
  },
  findParentHolder: function($element) {
    return $element.closest(pf.validate.conventions.parentHolder); // Finds cntaining parent
  },
  findLabelAfter: function($element) {
    return ($element.next().is('label') && ($element.next().attr('for') == $element.attr('id'))) ? $element.next() : $element;
  },
  addErrorClasses: function($parent) {
    $parent.addClass(pf.validate.conventions.parentHolderErrorClass);
  },
  removeErrorClasses: function($element) {
    var $parent = pf.validate.findParentHolder($element);
    $parent.removeClass(pf.validate.conventions.parentHolderErrorClass);
    pf.validate.writeErrorMessage($parent,''); // Remove error message too
  },
  createErrorMessageHolder: function($element) {
    if (pf.validate.isRequiredCheckbox($element)) {
      pf.validate.findLabelAfter($element).after(pf.validate.snippets.errorMessageHolder);
    } else {
      $element.after(pf.validate.snippets.errorMessageHolder); // Add markup for error message holder after field
    }
  },
  checkForErrorMessageHolder: function($parent) {
    return ($parent.find(pf.validate.conventions.errorMessageHolderClass).length > 0) ? true : false;
  },
  writeErrorMessage: function($parent,errorMessage) {
    $parent.find(pf.validate.conventions.errorMessageHolderClass).html(errorMessage);
  },
  isRequired: function($element) {
    return ($element.attr("required") == "required"); // Return binary (true/false)
  },
  isRequiredCheckbox: function($element) {
    return (pf.validate.isRequired($element) && $element.attr("type") == "checkbox"); // Return binary (true/false)
  },
  isEmailField: function($element) {
    return ($element.attr("type") == "email"); // Return binary (true/false)
  },
  isPhoneField: function($element) {
    return ($element.attr("type") == "phone"); // Return binary (true/false)
  },
  isSubdomainField: function($element) {
    return ($element.attr(pf.validate.dataAttributes.fieldType) == "subdomain"); // Return binary (true/false)
  },
  isPasswordField: function($element) {
    return ($element.attr("type") == "password"); // Return binary (true/false)
  },
  isValidEmailField: function($element) {
    return (pf.common.isValidEmailAddress(pf.common.stripTrailingSpaces($element.val()))); // Return binary (true/false)
  },
  isValidPhoneField: function($element) {
    return (pf.common.isValidPhoneNumber(pf.common.stripTrailingSpaces($element.val()))); // Return binary (true/false)
  },
  isValidSubdomainField: function($element) {
    return (pf.common.isValidSubdomain(pf.common.stripTrailingSpaces($element.val()))); // Return binary (true/false)
  },
  isSubstitutionField: function($element) {
    // TECHDEBT - WORRIED ABOUT NAMING - eg 'subsition' isn't specific enough as there are others

    // TECHDEBT - Want to make more flexible so we can handle more than passwords
    // pf.validate.errorMessages.fieldTypesForSubsitions
    return pf.validate.isPasswordField($element);
  },
  hasMinLength: function($element) {
    var attr = $element.attr(pf.validate.dataAttributes.minLength);
    return (typeof attr !== 'undefined' && attr !== false); // Return binary (true/false)
  },
  hasMaxLength: function($element) {
    var attr = $element.attr(pf.validate.dataAttributes.maxLength);
    return (typeof attr !== 'undefined' && attr !== false); // Return binary (true/false)
  },
  hasNoSpaces: function($element) {
    return (pf.common.hasNoSpaces($element.val())); // Return binary (true/false)
  },
  hasCustomValidation: function($element) {
    var attr = $element.attr(pf.validate.dataAttributes.customValidation);
    return (typeof attr !== 'undefined' && attr !== false); // Return binary (true/false)
  },
  hasFieldType: function($element) {
    var attr = $element.attr(pf.validate.dataAttributes.fieldType);
    return (typeof attr !== 'undefined' && attr !== false); // Return binary (true/false)
  },
  shouldBeNumber: function($element) {
    var attr = $element.attr(pf.validate.dataAttributes.shouldBeNumber);
    return (typeof attr !== 'undefined' && attr !== false); // Return binary (true/false)
  },
  shouldBeInteger: function($element) {
    var attr = $element.attr(pf.validate.dataAttributes.shouldBeInteger);
    return (typeof attr !== 'undefined' && attr !== false); // Return binary (true/false)
  },
  shouldNotHaveSpaces: function($element) {
    var attr = $element.attr(pf.validate.dataAttributes.shouldNotHaveSpaces);
    return (typeof attr !== 'undefined' && attr !== false); // Return binary (true/false)
  },
  shouldMatch: function($element) {
    var dataAttr = pf.validate.dataAttributes.shouldMatch;
    var attr = $element.attr(dataAttr);
    return (typeof attr !== 'undefined' && attr !== false) ? attr : false; // Return ID to match or false
  },
  needsToBeMatched: function(errorMessage) {
    return (errorMessage.indexOf(pf.validate.conventions.matchElementID.error.indicator) >= 0) ? pf.validate.getMatchIDFromErrorMessage(errorMessage) : false;
  },
  getFieldType: function ($element) {
    return $element.attr(pf.validate.dataAttributes.fieldType);
  },
  getMatchIDFromErrorMessage: function (errorMessage) {
    var toMatchID = errorMessage.match(pf.validate.conventions.matchElementID.error.regex);
    toMatchID += ""; // Ensure it's a string
    return toMatchID.substring(pf.validate.conventions.matchElementID.error.initialTrim);
  },
  getMinLength: function($element) {
    return $element.attr(pf.validate.dataAttributes.minLength);
  },
  getMaxLength: function($element) {
    return $element.attr(pf.validate.dataAttributes.maxLength);
  },
  getFieldTypeForSubsitution: function($element) {
    // TECHDEBT - WORRIED ABOUT NAMING - eg 'subsition' isn't specific enough as there are others

    // TECHDEBT - Want to make more flexible so we can handle more than passwords
    // pf.validate.errorMessages.fieldTypesForSubsitions
    substitutionFieldType = 'password';

    return substitutionFieldType;
  },
  processErrorMessageSubstitutions: function(string,$element) {
    // TECHDEBT - WORRIED ABOUT NAMING - eg 'subsition' isn't specific enough as there are others
    // TECHDEBT - Method seems too complicated - can we split out?
    if (typeof $element !== 'undefined' && $element !== false) {
      if (pf.validate.hasFieldType($element) || pf.validate.isSubstitutionField($element)) {
        var fieldType = (pf.validate.isSubstitutionField($element)) ? pf.validate.getFieldTypeForSubsitution($element) : pf.common.snakeCaseToCamelCase(pf.validate.getFieldType($element));
        var substitutionHash = pf.validate.errorMessages.substitutions[fieldType];
        $.each(substitutionHash, function(substitutionName, substitutionValue) {
          string = (pf.validate.errorMessages[substitutionName] == string) ? substitutionValue : string;
        });
      }
    }
    return string;
  },
  processErrorMessage: function(string,validationName,$element) {
    var value;
    string = pf.validate.processErrorMessageSubstitutions(string,$element);
    switch (validationName) {
      case 'MinLength':
        value = pf.validate.getMinLength($element);
        return pf.common.interpolateString(pf.validate.processErrorMessageSubstitutions(pf.validate.errorMessages.MinLength,$element),value);
      case 'MaxLength':
        value = pf.validate.getMaxLength($element);
        return pf.common.interpolateString(pf.validate.processErrorMessageSubstitutions(pf.validate.errorMessages.MaxLength,$element),value);
      default:
        return string;
    }
  },
  validateRequired: function($element) {
    return !(pf.common.isFieldEmpty($element)); // Return binary (true/false)
  },
  validateRequiredCheckbox: function($element) {
    return ($element.is(":checked")); // Return binary (true/false)
  },
  validateEmail: function($element) {
    return (pf.common.isEmptyOrNotRequired($element) || pf.validate.isValidEmailField($element));
  },
  validatePhone: function($element) {
    return (pf.common.isEmptyOrNotRequired($element) || pf.validate.isValidPhoneField($element));
  },
  validateSubdomain: function($element) {
    return (pf.common.isEmptyOrNotRequired($element) || pf.validate.isValidSubdomainField($element));
  },
  validateMinLength: function($element) {
    return (pf.common.isEmptyOrNotRequired($element) || $element.val().length >= pf.validate.getMinLength($element));
  },
  validateMaxLength: function($element) {
    return (pf.common.isEmptyOrNotRequired($element) || $element.val().length <= pf.validate.getMaxLength($element));
  },
  validateNoSpaces: function($element) {
    return (pf.common.isEmptyOrNotRequired($element) || pf.common.hasNoSpaces($element.val()));
  },
  validateThatValueMatches: function($element,matchElementID) {
    var $matchElement = $(pf.common.stringToID(matchElementID));
    return (pf.common.isEmptyOrNotRequired($element) || (pf.common.isValidID(matchElementID) && !pf.common.isFieldEmpty($element) && ($matchElement.length == 1) && ($element.val() == $matchElement.val()))); // Return binary (true/false)
  },
  validateNumber: function($element) {
    return (pf.common.isEmptyOrNotRequired($element) || pf.common.isNumber($element.val()));
  },
  removeEmptyOption: function($element) {
    if ($element.val() == "") {
      $element.remove();
    }
  },
  removeEmptyOptions: function($element) {
    $element.children('option').each(function() {
      pf.validate.removeEmptyOption($(this));
    });
  },
  setupOptions: function() {
    $('select').on('change', function() {
      pf.validate.removeEmptyOptions($(this));
    });
  },
  submitButtonHasWaitingText: function($form) {
    var $button = $(pf.validate.conventions.submitButton,$form);
    var attr = $button.attr(pf.validate.dataAttributes.waitingText);
    return (typeof attr !== 'undefined' && attr !== false); // Return binary (true/false)
  },
  setWaitingState: function($button,state) {
    // TECHDEBT - must be able to simplify this lot
    if (state) {
      var dateNow = Date.now();
      pf.validate.stateHolder.originalButtonText[dateNow] = $button.html();
      $button.attr(pf.validate.dataAttributes.elementIdentifier,dateNow);
      var waitingText = $button.attr(pf.validate.dataAttributes.waitingText);
      $button.html(waitingText).addClass(pf.validate.conventions.waitingClass);
    } else {
      // TECHDEBT - Probably time to create a "hasAttr" prototype function
      var attr = $button.attr(pf.validate.dataAttributes.elementIdentifier);
      if (typeof attr !== 'undefined' && attr !== false) {
        $button.html(pf.validate.stateHolder.originalButtonText[$button.attr(pf.validate.dataAttributes.elementIdentifier)])
      }
      $button.removeClass(pf.validate.conventions.waitingClass);
    }
  },
  toggleWaitingState: function($button) {
    var state = !($button.hasClass(pf.validate.conventions.waitingClass));
    pf.validate.setWaitingState($button,state);
  },
  beforeFormSubmits: function($form) {
    if (pf.validate.submitButtonHasWaitingText($form)) {
      var $button = $(pf.validate.conventions.submitButton,$form);
      // pf.validate.setWaitingState($button,true);
      pf.validate.toggleWaitingState($button,true);
    }
  },
  validateInteger: function($element) {
    return (pf.common.isEmptyOrNotRequired($element) || pf.common.isInteger($element.val()));
  },
  validateCustom: function($element) {
    // TECHDEBT - There must be a way to simplify this
    var customValidationRegex = $element.attr(pf.validate.dataAttributes.customValidation);
    var customValidationErrorMessage = $element.attr(pf.validate.dataAttributes.customValidationMessage);
    var elementValue = $element.val();
    var pattern = new RegExp(customValidationRegex);
    var errorMessage;
    // Is there a custom error message?
    if (typeof customValidationErrorMessage !== 'undefined' && customValidationErrorMessage !== false) {
      errorMessage = (customValidationErrorMessage.length > 0) ? customValidationErrorMessage : pf.validate.errorMessages.CustomValidationDefault;
    } else {
      errorMessage = pf.validate.errorMessages.CustomValidationDefault;
    }
    return !(pattern.test(elementValue) || (pf.common.isEmpty(elementValue))) ? errorMessage : false; // Return binary (true/false)
  },
  validate: function($element) {
    var errorMessage = [];
    var validationHash = {
      'isRequired'          : 'Required',
      'isRequiredCheckbox'  : 'RequiredCheckbox',
      'isEmailField'        : 'Email',
      'isPhoneField'        : 'Phone',
      'isSubdomainField'    : 'Subdomain',
      'hasMinLength'        : 'MinLength',
      'hasMaxLength'        : 'MaxLength',
      'shouldBeNumber'      : 'Number',
      'shouldBeInteger'     : 'Integer',
      'shouldNotHaveSpaces' : 'NoSpaces'
    };
    // Do each of the standard validations
    $.each(validationHash, function(validationCheck, validationName) {
      var codeToEval = "\
        if (pf.validate." + validationCheck + "($element)) {\
          var resultHolder = pf.validate.validate" + validationName + "($element);\
          if (!resultHolder && pf.validate.errorMessages." + validationName + " != 'undefined') {\
            errorMessage.push (pf.validate.processErrorMessage(pf.validate.errorMessages." + validationName + ",'" + validationName +"',$element));\
          }\
        }\
      ";
      eval(codeToEval);
    });
    // Do non-standard validations
    // Should it match another element?
    if (pf.validate.shouldMatch($element)) {
      var $matchWithID = pf.validate.shouldMatch($element);
      var resultHolder = pf.validate.validateThatValueMatches($element,$matchWithID);
      // TECHDEBT - Not happy that this breaks convention by having !resultHolder
      if (!resultHolder) {
        var matchErrorMessage = pf.validate.processErrorMessage(pf.validate.errorMessages.Matches,'Matches',$element) + pf.common.interpolateString(pf.validate.snippets.matchElementIDHolder,$matchWithID); // Add hidden element to hold ID
        errorMessage.push (matchErrorMessage); // Set match error message
      }
    }
    // Does it have a custom validation?
    if (pf.validate.hasCustomValidation($element)) {
      var resultHolder = pf.validate.validateCustom($element);
      if (resultHolder) {
        errorMessage.push (resultHolder); // Set custom validation message
      }
    }

    // FINALLY - Are there any error messages?
    if (errorMessage.length > 0) {
      var fieldType;
      if (pf.validate.hasFieldType($element) || pf.validate.isSubstitutionField($element)) {
        fieldType = (pf.validate.isSubstitutionField($element)) ? pf.validate.getFieldTypeForSubsitution($element) : pf.common.snakeCaseToCamelCase(pf.validate.getFieldType($element));
      } else {
        fieldType = false;
      }
      return (pf.validate.processErrorMessages(errorMessage,fieldType));
    } else {
      pf.validate.removeErrorClasses($element);
      return false;
    }
  },
  validateAll: function($form) {
    var $fields = $(pf.validate.formFieldsList.join(","),$form);
    var errorMessage;
    var toSubmit = true;
    var hasErrors = false;
    // Go through each field on the form
    $fields.each(function() {
      var $this = $(this);
      errorMessage = pf.validate.validate($this);
      if (errorMessage !== false) {
        // First error message we hit, scroll to that field
        if (hasErrors == false) {
          hasErrors = true;
          console.log($this.attr('id'));
          pf.common.scrollToId($this.attr('id'));
        }
        pf.validate.addError($this,errorMessage);
        toSubmit = false;
      }
    });
    return toSubmit;
  },
  setupValidation: function() {
    $(pf.requiredElements.validate).on('submit',function(){
      $this = $(this);
      var toSubmit = pf.validate.validateAll($this);
      if (toSubmit) {
        pf.validate.beforeFormSubmits($this);
        // KILLER
        return false;
      }
      return toSubmit; // Returns true if no error messages, else false
    });
    pf.validate.setupOptions();
  }
};

define(['jquery','common'], function() {
  pf.validate.setupValidation();
});
