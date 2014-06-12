var Skybill = {

  /********************* PROPERTIES *********************/
  TV : {
    cost: '',
    inDate: '',
    name: 'TV Bundle Price',
  },

  BB : {
    cost: '',
    inDate: '',
    name: 'Sky Talk & Broadband Price',
  },

  /********************* HELPER FUNCTIONS *********************/
  // TODO - Make Private if possible

  parseDate : function(dateStr) {
    /* Precondition: dateIn is a string in the format dd/mm/yy or dd/mm/yyyy
     * Postcondition: returns JavaScript Date instance */

    var dateParts = dateStr.split(/[/-]/);
    //new Date(year, month, day)
    return new Date(dateParts[2], dateParts[1]-1, dateParts[0]);
  },

  dayDiff : function(first, second) {
    /* Precondition: Both parameters are Date instances
     * Postcondition: returns number of days between the dates as an integer */

    var msInDay = 1000*60*60*24;  // Milliseconds in a day (24 hours)
    var diff = (second - first);  // Diference in Milliseconds
    return Math.floor(diff/msInDay);
  },

}

