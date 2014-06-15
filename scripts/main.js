addEvent(window, 'load', function() {

  var myForm = document.getElementById('billform');
  var submitbutton = Form.getSubmit('billform');
  submitbutton.disabled = 'disabled';

  function checkForm() {
    var inputs = myForm.getElementsByTagName('input');

    if (Form.validateCurrency(inputs[0])) {
      Skybill.TV.cost=inputs[0].value;
      if (Form.validateDate(inputs[1])) {
        Skybill.TV.inDate=inputs[1].value;
        if (Form.validateCurrency(inputs[2])) {
          Skybill.BB.cost=inputs[2].value;
          if (Form.validateDate(inputs[3])) {
            Skybill.BB.inDate=inputs[3].value;

            submitbutton.disabled = false;
            return true;
          }
        }
      }
    }

    submitbutton.disabled = 'disabled';
    return false;
  }; /*** checkForm ***/

  checkForm();
  addEvent(myForm, 'keyup', checkForm);
  addEvent(myForm, 'submit', checkForm);
});

function displayResults() {

  var costEl = document.getElementsByName('billcost');
  var dateEl = document.getElementsByName('billdate');

  costEl[0].innerHTML = Skybill.firstBill.costs();
  dateEl[0].innerHTML = Skybill.firstBill.date();
  costEl[1].innerHTML = Skybill.secondBill.cost();
  dateEl[1].innerHTML = Skybill.secondBill.date();
  costEl[2].innerHTML = Skybill.thirdBill.cost();
  dateEl[2].innerHTML = Skybill.thirdBill.date();

  document.getElementById('billform').style.display = 'none';
  document.getElementById('results').style.display = 'block';
}; /*** displayResults ***/

function reset() {
    document.getElementById('billform').style.display = 'block';
    document.getElementById('results').style.display = 'none';
};
