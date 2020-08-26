function startTimer(seconds) {
  console.log("Starting timer for " + seconds + " seconds");
  var current_date = new Date();
  var current_time = current_date.getTime();  
  var end_time = current_time + (seconds * 1000);
  var end_date = new Date(current_time + (seconds * 1000));
  var timer = setInterval(function(){
    var now = new Date().getTime();
    var t = end_time - now;
    if (t >= 0) {
      let days = Math.floor(t/(1000 * 60 * 60 * 24));
      let hours = Math.floor((t % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));
      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((t % (1000 * 60)) / 1000);

      document.getElementById("timer-days").innerHTML = days + "<span class='label'> Day(s)</span>";
      document.getElementById("timer-hours").innerHTML = ("0" + hours).slice(-2) + "<span class='label'> Hour(s)</span>";
      document.getElementById("timer-minutes").innerHTML = ("0" + mins).slice(-2) + "<span class='label'> Minute(s)</span>";
      document.getElementById("timer-seconds").innerHTML = ("0" + secs).slice(-2) + "<span class='label'> Second(s)</span>";
    }
  }, 1000);
}