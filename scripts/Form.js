var Form = {

  validClass : 'valid',

  bdate : {
    minVal : 1,
    maxVal : 28,
  },

  validateDate : function(fromEl) {
  },

  validateCurrency : function(formEl, maxLength) {
  },

  validateNumber : function(formEl, type) {
  },

  getSubmit : function(formID) {
    var inputs = document.getElementById(formID).getElementsByTag('input');
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == 'submit') {
        return inputs[i];
      }
    }
    return false;
  },

};

