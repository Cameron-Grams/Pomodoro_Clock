var clock_running = false;
var counting;

function increase_session(){
  var session_time = parseInt(document.getElementById("interval_time").value);
  session_time += 1;
  document.getElementById("interval_time").value = session_time;
  display_time(session_time);
}

function decrease_session(){
  var session_time = parseInt(document.getElementById("interval_time").value);
  session_time -= 1;
  document.getElementById("interval_time").value = session_time;
  display_time(session_time);
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
  var session_time = document.getElementById("interval_time").value;
  var seconds = 60; 
  counting = setInterval(function(){
    curr_time = document.getElementById("current_time").value;
    var min_sec_split = curr_time.match(/:/);
    var min_sec_index = curr_time.indexOf(min_sec_split);
    var minutes = parseInt(curr_time.substring(min_sec_index, 0));
    var seconds = parseInt(curr_time.substring(min_sec_index + 1));
    console.log(minutes);
//workout stop and minute to second logic...
    seconds -= 1;
    if (seconds <= -1) {
      clearInterval(counting);
    } else {
      display_time(minutes, seconds);
    }
  }, 1000);

}

function change_display(){
  console.log("Display change");
}




function display_time(minutes, seconds){
  var min = minutes.toString();
  var sec = seconds.toString();
  var curr_time = min + ":" + sec;
  document.getElementById("current_time").value = curr_time;
}












