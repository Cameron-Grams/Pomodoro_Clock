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
  console.log("called stop");
  clearInterval(counting);
}


function session_count_down(){
  var session_time = document.getElementById("interval_time").value;
  var seconds = 0; 
  counting = setInterval(function(){
    curr_time = document.getElementById("current_time").value;
    curr_time -= 1;
    if (curr_time <= -1) {
      clearInterval(counting);
    } else {
      display_time(curr_time);
    }
  }, 1000);

}

function change_display(){
  console.log("Display change");
}




function display_time(curr_time){
  console.log("current time is ", curr_time);
  document.getElementById("current_time").value = curr_time;
}












