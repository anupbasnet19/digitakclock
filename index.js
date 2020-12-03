function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec; /* adding time to the div */
  }
  function updateTime(x) {
    if (x < 10) {
      return "0" + x;
    }
    else {
      return x;
    }
  }



  function currentTime() {
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
  }
  currentTime();
  
  function currentTime() {
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
  }
   function currentTime() {
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
  }
