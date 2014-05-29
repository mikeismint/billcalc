function calc() {
  /* Precondition: Input form contains validated inputs
   * Postcondition: Displays results on page */

  // Collect form cost values
  var tvcost = document.getElementById("tvcost").value;
  var bbcost = document.getElementById("bbcost").value;

  // Collect and parse form dates
  var tvdate = parseDate(document.getElementById("tvdate").value);
  var bbdate = parseDate(document.getElementById("bbdate").value);

  // Declare other variables
  var billOne, billTwo, billThree;
  var dateOne, dateTwo, dateThree;

  // TESTS - REMOVE WHEN FINISHED
  document.write(tvcost);
  document.write(tvdate.toUTCString());
  dateOne = new Date(tvdate);
  dateOne.setDate(dateOne.getDate() + 14);
  document.write(dateOne.toUTCString());
}

function parseDate(dateIn) {
  /* Precondition: dateIn is a string in the format dd/mm/yy or dd/mm/yyyy
   * Postcondtion: returns JavaScript Date instance */

  var dateParts = dateIn.split('/');
  
  // new Date(year, month, day) 
  return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
}
