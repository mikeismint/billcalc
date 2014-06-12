var Skybill = {

  /********************* PROPERTIES *********************/
  TV: {
    cost: '',
    inDate: '',
    name: 'TV Bundle Price',
  },

  BB: {
    cost: '',
    inDate: '',
    name: 'Sky Talk & Broadband Price',
  },

  /********************* HELPER FUNCTIONS *********************/
  // TODO - Make Private if possible

  parseDate:function (dateStr) {
    /* Precondition: dateStr is a string in the format dd/mm/yy or dd/mm/yyyy
     * Postcondition: returns JavaScript Date instance */
    var dateParts = dateStr.split(/[/\,-]/);

    //new Date(year, month, day)
    return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
  },

  dateToString:function (dateObj) {
    /* Precondition: dateObj is a JavaScript Date instance
     * Postcondition: return string in the format dd/mm/yy */
    day = dateObj.getDate().toString();
    month = (dateObj.getMonth() + 1).toString();
    year = dateObj.getFullYear().toString().substr(2,2);

    if (day.length == 1) { day = '0' + day; }
    if (month.length == 1 ) { month = '0' + month; }

    return [day, month, year].join('/');
  },

  dayDiff:function (earlier, later) {
    /* Precondition: Both parameters are Date strings as dd/mm/yyyy
     * Postcondition: returns number of days between the dates as an integer */
    var dEarly = parseDate(earlier);
    var dLate = parseDate(later);
    var msInDay = 1000*60*60*24;  // Milliseconds in a day (24 hours)
    var diff = (dEarly - dLate);  // Diference in Milliseconds

    return Math.floor(diff/msInDay);
  },

  proRata:function (amount, days) {
    /* Precondition: amount is an integer representing normal full month cost
     *               days is the number of days cost to be calculated
     * Postcondition: Returns cost for required days as an integer */
     var costPerDay = (cost * 12) / 365;

     return (costPerDay * days);
  },

  /********************* PUBLIC METHODS *********************/

  firstBill: {
    cost:function {
      return (+TV.cost).toFixed(2);
    },
    date:function {
      var d = parseDate(TV.inDate);
      d.setDate(d.getDate()+14);
      return dateToString(d);
    },
  },

  secondBill: {
    cost:function {
      var pr = proRata(BB.cost, dayDiff(BB.inDate, secondBill.date));
      return (+TV.cost + +BB.cost + +pr).toFixed(2);
    },
    date:function {
      var d = parseDate(TV.inDate);
      d.setMonth(d.getMonth()+1);
      return dateToString(d);
    },
  },

  thirdBill: {
    cost:function {
      return (+TV.cost + +BB.cost).toFixed(2);
    },
    date:function {
      var d = parseDate(TV.inDate);
      d.setMonth(d.getMonth()+2);
      return dateToString(d);
    },
  },

}

