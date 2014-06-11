function addEvent(to, type, fn) {
  /* Preconditions: to is a valid DOM object
   *                type is a valid event type
   *                fn is the funtion to be ran
   * Postconditions: Creates new event listener function */
 
  if (document.addEventListener) {
    to.addEventListener(type, fn, false);
  } else if (document.attachEvent) {
    to.attachEvent('on'+type, fn);
  } else {
    to['on'+type] = fn;
  }
};

