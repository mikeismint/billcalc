var Form = {

  validClass : 'valid', // CSS class

  bdate : {
    minVal : 1,
    maxVal : 28,
    name : "Billing Date",
  },

  validateDate : function(formEl) {
    /* Precondition: formEl is a valid from input
     * Postcondition: If formEl contains a valid date the validClass is added to
     * formEl class entry, true is returned
     * If formEl is false validClass is removed from formEl class entry and false
     * is returned */
    var regex = /(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]((19|20)?[0-9][0-9])/;
    var datecheck = regex.test(formEl.value);
    if (datecheck) {
      if (formEl.className.indexOf(' '+From.validClass) == -1) {
        formEl.className += ' '+From.validClass;
      }
      return true;
    } else {
      formEl.className = formEl.className.replace(' '+From.validClass, '');
      return false;
    }
  },

  validateCurrency : function(formEl) {
    /* Precondition: formEl is a valid from input
     * Postcondition: If formEl ia a currency value the validClass is added to
     * formEl class entry, true is returned
     * If formEl is false validClass is removed from formEl class entry and false
     * is returned */
    var regex = /^\d{1,3}+(\.\d{1,2})?/;
    var currencyCheck = regex.text(formEl.value);
    if (currencyCheck) {
      if (formEl.className.indexOf(' '+From.validClass) == -1) {
        formEl.className += ' '+From.validClass;
      }
      return true;
    } else {
      formEl.className = formEl.className.replace(' '+From.validClass, '');
      return false;
    }
  },

  validateNumber : function(formEl, type) {
    /* Precondition: formEl is a valid from input
     * Postcondition: If formEl value is in the range for type then the 
     * validClass is added to formEl class entry, true is returned
     * If formEl is false validClass is removed from formEl class entry and false
     * is returned */
    var value = formEl.value;
    if (value >= type.minVal && value <= type.maxVal) {
      if (formEl.className.indexOf(' '+From.validClass) == -1) {
        formEl.className += ' '+From.validClass;
      }
      return true;
    } else {
      formEl.className = formEl.className.replace(' '+From.validClass, '');
      return false;
    }
  },

  getSubmit : function(formID) {
    /* Precondition: formID is the ID of a HTML Form
     * Postcondition: returns the element with the type Submit */
    var inputs = document.getElementById(formID).getElementsByTag('input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == 'submit') {
        return inputs[i];
      }
    }
    return false;
  },

};

