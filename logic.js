var in_break = false;
var counting;
var display_type;

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
  counting.pause();;
}



function Current_Countdown(count_down){
  var timerObj;

  this.pause = function(){
    if (timerObj){
      clearInterval(timerObj);
    }
    return this;
  }

  this.stop = function(){
    if (timerObj){
      clearInterval(timerObj);
      timerObj = null;
    }
    return this;
  }
 
  this.start = function() {
    if (!timerObj){
      this.stop();
      timerObj = setInterval(count_down, 1000);
    } else {
      timerObj = setInterval(count_down, 1000);
    }
  }

}



//calls the actual countdown timer
function session_count_down(){
  if (!counting){
    counting = new Current_Countdown(count_down);
    counting.start();
  } else {
    counting.start();
  }
}

function count_down(){
    curr_time = document.getElementById("current_time").value;
    var min_sec_split = curr_time.match(/:/);
    var min_sec_index = curr_time.indexOf(min_sec_split);
    var minutes = parseInt(curr_time.substring(min_sec_index, 0));
    var seconds = parseInt(curr_time.substring(min_sec_index + 1));
    console.log(minutes);
    console.log(seconds);

    if (seconds == 0 && minutes == 0) {
      console.log("in final test");
      main_control();
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
};







//function to transition between session interval and break interval and back
function main_control(){
  var session = document.getElementById("session_number").value;
  var current_time = document.getElementById("current_time").value;
  var break_time = document.getElementById("break_time").value;
  var session_time = document.getElementById("interval_time").value;


  in_break = !in_break;
  console.log("in_break value: ", in_break);


  if (in_break){
    console.log("passed display time");
    display_time(break_time, "00");
  } else {
    document.getElementById("session_number").value = parseInt(session) + 1;
    display_time(session_time, '00');
  } 
  
  session_count_down();
}





function change_display_type(){
  console.log("Display change");
}




function display_time(minutes, seconds){
  var min = minutes.toString();
  var sec = seconds.toString();
  var curr_time = min + ":" + sec;
  console.log("current time is ", curr_time);
  document.getElementById("current_time").value = curr_time;
}












