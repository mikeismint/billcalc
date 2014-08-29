addEvent(window, 'load', function() {

  var myForm = document.getElementById('billform');
  var inputs = myForm.getElementsByTagName('input');
  var submitbutton = Form.getSubmit('billform');
  submitbutton.disabled = 'disabled';

  function checkForm() {
    if (Form.validateCurrency(inputs[0])) {
      Skybill.TV.cost=inputs[0].value;
      if (Form.validateDate(inputs[1])) {
        Skybill.TV.inDate=inputs[1].value;
        if (Form.validateCurrency(inputs[2])) {
          Skybill.BB.cost=inputs[2].value;
          if (Form.validateDate(inputs[3])) {
            Skybill.BB.inDate=inputs[3].value;
            if (Form.validateNumber(inputs[4], Form.bdate)) {
              Skybill.prefBillDate=inputs[4].value;
            }

            submitbutton.disabled = false;
            return true;
          }
        }
      }
    }

    submitbutton.disabled = 'disabled';
    return false;
  }; /*** checkForm ***/

  function reset() {
      document.getElementById('results').style.display = 'none';
      myForm.style.display = 'block';
      myForm.reset();

      for ( var i = 0; i < inputs.length; i++) {
        Form.validateCurrency(inputs[i]);
      }
      checkForm;
  }; /*** reset ***/

  addEvent(inputs[0], 'focus', function() {
    if (this.value === 'Enter TV price only') { this.value = ''; }
  });
  addEvent(inputs[1], 'focus', function() {
    if (this.value === 'dd/mm/yy') { this.value = ''; }
  });
  addEvent(inputs[2], 'focus', function() {
    if (this.value === 'inc. Line Rental') { this.value = ''; }
  });
  addEvent(inputs[3], 'focus', function() {
    if (this.value === 'dd/mm/yy') { this.value = ''; }
  });

  addEvent(inputs[0], 'blur', function() {
    if (this.value === '') { this.value = 'Enter TV price only'; }
  });
  addEvent(inputs[1], 'blur', function() {
    if (this.value === '') { this.value = 'dd/mm/yy'; }
  });
  addEvent(inputs[2], 'blur', function() {
    if (this.value === '') { this.value = 'inc. Line Rental'; }
  });
  addEvent(inputs[3], 'blur', function() {
    if (this.value === '') { this.value = 'dd/mm/yy'; }
  });

  addEvent(myForm, 'keyup', checkForm);
  addEvent(myForm, 'submit', checkForm);
  addEvent(document.getElementById('reset'), 'click', reset);

  checkForm();
}); /*** addEvent - window.onload ***/

function displayResults() {
  var costEl = document.getElementsByName('billcost');
  var dateEl = document.getElementsByName('billdate');

  costEl[0].innerHTML = "&#163;"+Skybill.firstBill.costs();
  dateEl[0].innerHTML = Skybill.firstBill.date();
  costEl[1].innerHTML = "&#163;"+Skybill.secondBill.cost();
  dateEl[1].innerHTML = Skybill.secondBill.date();
  costEl[2].innerHTML = "&#163;"+Skybill.thirdBill.cost();
  dateEl[2].innerHTML = Skybill.thirdBill.date();

  //document.getElementById('billform').style.display = 'none';
  document.getElementById('results').style.display = 'block';
  return true;
}; /*** displayResults ***/
