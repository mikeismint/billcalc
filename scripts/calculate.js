function calc() {
  /* Precondition: Input form contains validated inputs
   * Postcondition: Displays results on page                                  */

  // Collect form cost values
  var tvCost = document.getElementById("tvcost").value;
  var bbCost = document.getElementById("bbcost").value;

  // Collect and parse form dates
  var tvDate = parseDate(document.getElementById("tvdate").value);
  var bbDate = parseDate(document.getElementById("bbdate").value);

  // Declare other variables
  var billOne, billTwo, billThree;
  var dateOne, dateTwo, dateThree;

  // Calculate costa and dates
  billOne = (+tvCost).toFixed(2);
  dateOne = new Date(tvDate);
  dateOne.setDate(dateOne.getDate() + 14);

  dateTwo = new Date(tvDate);
  dateTwo.setMonth(dateTwo.getMonth() + 1);
  bbProRata = proRataCost(bbCost, dayDiff(bbDate, dateTwo));
  billTwo = (+tvCost + +bbCost + +bbProRata).toFixed(2);

  dateThree = new Date(tvDate);
  dateThree.setMonth(dateThree.getMonth() + 2);
  billThree = (+tvCost + +bbCost).toFixed(2);

  // Hide from and show results
  document.getElementById('billform').style.display = 'none';
  document.getElementById('results').style.display = 'block';

  // Fetch array if elements to display results
  var costs = document.getElementsByName('billcost');
  var dates = document.getElementsByName('billdate');

  costs[0].innerHTML = billOne;
  costs[1].innerHTML = billTwo;
  costs[2].innerHTML = billThree;

  dates[0].innerHTML = dateToString(dateOne);
  dates[1].innerHTML = dateToString(dateTwo);
  dates[2].innerHTML = dateToString(dateThree);
}

/******************************  parseDate ************************************/
function parseDate(dateIn) {
  /* Precondition: dateIn is a string in the format dd/mm/yy or dd/mm/yyyy
   * Postcondition: returns JavaScript Date instance                          */

  var dateParts = dateIn.split('/');
  // new Date(year, month, day)
  return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
}


/******************************  dayDiff **************************************/
function dayDiff(first, second) {
  /* Precondition: Both parameters are Date instances
   * Postcondition: returns number of days between the dates as an integer    */

  var msInDay = 1000*60*60*24;        // MilliSeconds in a Day (24 hours)
  var diff = (second - first);        // Difference in milliseconds
  return Math.floor(diff / msInDay);
}

/******************************  proRataCost **********************************/
function proRataCost(cost, days) {
  /* Precondition: cost is an integer representing normal full month cost
   *               days is the number of days cost to be calculated
   * Postcondition: Returns cost for required days as an integer              */

   var costPerDay = (cost * 12) / 365;
   return (costPerDay * days);
}

/**************************** dateToString ***********************************/
function dateToString(date) {
  /* Precondition: date is a JavaScript Date instance
   * Postcondition: return string in the format dd/mm/yy                     */

  day = date.getDate().toString();
  month = (date.getMonth() + 1).toString();
  year = date.getFullYear().toString().substr(2,2);

  if (day.length == 1) {
    day = '0' + day;
  }

  if (month.length == 1 ) {
    month = '0' + month;
  }

  return [day, month, year].join('/');
}

/****************************** reset *****************************************/
function reset() {
  /* Precondition: none
   * Postcondition: returns app to view when first loaded                     */

  document.getElementById('billform').style.display = 'block';
  document.getElementById('results').style.display = 'none';
}
