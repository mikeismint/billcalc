var Skybill = {

  /********************* USER DEFINED PROPERTIES *********************/
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

  prefBillDate: '',

  /********************* HELPER FUNCTIONS *********************/
  parseDate:function (dateStr) {
    /* Precondition: dateStr is a string in the format dd/mm/yy or dd/mm/yyyy
     * Postcondition: returns JavaScript Date instance */
    var re = /[/\,-]/;
    var dateParts = dateStr.split(re);
    if (dateParts[2].length == 2) {
      dateParts[2] = '20' + dateParts[2];
    };

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
    year = '20' + year;

    return [day, month, year].join('/');
  },

  dayDiff:function (earlier, later) {
    /* Precondition: Both parameters are Date strings as dd/mm/yyyy
     * Postcondition: returns number of days between the dates as an integer */
    var dEarly = Skybill.parseDate(earlier);
    var dLate = Skybill.parseDate(later);
    var msInDay = 1000*60*60*24;  // Milliseconds in a day (24 hours)
    var diff = (dLate - dEarly);  // Difference in Milliseconds

    return Math.floor(diff/msInDay);
  },

  proRata:function (amount, days) {
    /* Precondition: amount is an integer representing normal full month cost
     *               days is the number of days cost to be calculated
     * Postcondition: Returns cost for required days as an integer */
     var costPerDay = (amount * 12) / 365;

     return (costPerDay * days);
  },

  recBillDate:function() {
    /* Precondition: none
     * Postcondition: returns recurring billing date between 1st
     *                and 28th as string */
    var d = Skybill.parseDate(Skybill.TV.inDate);
    d = d.getDate();
    if (Skybill.prefBillDate !== '') {
      return Skybill.prefBillDate;
    }
    switch (d) {
      case 29: return '26';
      case 30: return '27';
      case 31: return '28';
      default: return d.toString();
    }
  },

  /********************* PUBLIC METHODS *********************/
  firstBill: {
    costs:function() {
      return (+Skybill.TV.cost).toFixed(2);
    },
    date:function() {
      var d = Skybill.parseDate(Skybill.TV.inDate);
      d.setDate(d.getDate()+14);
      return Skybill.dateToString(d);
    },
  },

  secondBill: {
    cost:function() {
      var dd = Skybill.dayDiff(Skybill.BB.inDate, this.date())
      var pr = Skybill.proRata(Skybill.BB.cost, dd);
      return (+Skybill.TV.cost + +Skybill.BB.cost + +pr).toFixed(2);
    },

    date:function() {
      var d = Skybill.parseDate(Skybill.TV.inDate);
      if (Skybill.recBillDate() < d.getDate()) {
        d.setMonth(d.getMonth()+2);
      } else {
        d.setMonth(d.getMonth()+1);
      };
      d.setDate(Skybill.recBillDate());
      return Skybill.dateToString(d);
    },
  },

  thirdBill: {
    cost:function() {
      return (+Skybill.TV.cost + +Skybill.BB.cost).toFixed(2);
    },
    date:function() {
      var d = Skybill.parseDate(Skybill.secondBill.date());
      d.setMonth(d.getMonth()+1);
      return Skybill.dateToString(d);
    },
  },
}

