var clock_running = false;
var counting;

function increase_session(){
  var session_time = parseInt(document.getElementById("interval_time").value);
  session_time += 1;
  document.getElementById("interval_time").value = session_time;
  display_time(session_time, "00");
}

function decrease_session(){
  var session_time = parseInt(document.getElementById("interval_time").value);
  session_time -= 1;
  document.getElementById("interval_time").value = session_time;
  display_time(session_time, "00");
}

function increase_break(){
  var break_time = parseInt(document.getElementById("break_time").value);
  break_time += 1;
  document.getElementById("break_time").value = break_time;
}

function decrease_break(){
  var break_time = parseInt(document.getElementById("break_time").value);
  break_time -= 1;
  document.getElementById("break_time").value = break_time;
}

function stop_count_down(){
  clearInterval(counting);
}

function session_count_down(){
  counting = setInterval(function(){
    curr_time = document.getElementById("current_time").value;
    var min_sec_split = curr_time.match(/:/);
    var min_sec_index = curr_time.indexOf(min_sec_split);
    var minutes = parseInt(curr_time.substring(min_sec_index, 0));
    var seconds = parseInt(curr_time.substring(min_sec_index + 1));
    console.log(minutes);
    console.log(seconds);

    if (seconds == 0 && minutes == 0) {
      console.log("in final test");
//      clearInterval(counting);
      minutes = document.getElementById("break_time").value;

//      display_time(break_time, "00");
    }
    if (seconds == 0) {
      seconds = 60;
      minutes -= 1;
    }

    seconds -= 1;

    if (seconds < 10){
      seconds.toString();
      seconds = "0" + seconds;
    }

    if (seconds >= 0) {
      display_time(minutes, seconds);
    }
  }, 1000);
}







function change_display_type(){
  console.log("Display change");
}




function display_time(minutes, seconds){
  var min = minutes.toString();
  var sec = seconds.toString();
  var curr_time = min + ":" + sec;
  document.getElementById("current_time").value = curr_time;
}












