addEvent(window, 'load', function() {

  var myForm = document.getElementById('billform');
  var submitbutton = Form.getSubmit('billform');
  submitbutton.disabled = 'disabled';

  function checkForm() {
    var inputs = myForm.getElementsByTagName('input');

    if (Form.validateCurrency(inputs[0])) {
      if (Form.validateDate(inputs[1])) {
        if (Form.validateCurrency(inputs[2])) {
          if (Form.validateDate(inputs[3])) {

            submitbutton.disabled = false;
            return true;

          }
        }
      }
    }

    submitbutton.disabled = 'disabled';
    return false;
  };

  checkForm();
  addEvent(myForm, 'keyup', checkForm);
  addEvent(myForm, 'submit', checkForm);

});
