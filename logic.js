var $session = document.getElementById("session_number");
var $current_time = document.getElementById("current_time");
var $break_time = document.getElementById("break_time");
var $session_time = document.getElementById("interval_time");

var in_break = false;
var counting;



//var disp = 0;
//var display_type = full;

function increase_session(){
  var session_time = parseInt($session_time.value);
  session_time += 1;
  $session_time.value = session_time;
  display_time(session_time, "00");
}

function decrease_session(){
  var session_time = parseInt($session_time.value);
  session_time -= 1;
  $session_time.value = session_time;
  display_time(session_time, "00");
}

function increase_break(){
  var break_time = parseInt($break_time.value);
  break_time += 1;
  $break_time.value = break_time;
}

function decrease_break(){
  var break_time = parseInt($break_time.value);
  break_time -= 1;
  $break_time.value = break_time;
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

  this.reset = function(){
    this.stop().start();
  }
}

function pause_count_down(){
  counting.pause();
}

//calls the actual countdown timer
function current_count_down(){
  if (!counting){
    counting = new Current_Countdown(count_down);
    counting.start();
  } else {
    counting.start();
  }
}

function count_down(){
    curr_time = $current_time.value;
    var min_sec_split = curr_time.split(':');
    var minutes = parseInt(min_sec_split[0]);
    var seconds = parseInt(min_sec_split[1]);

    if (seconds == 0 && minutes == 0) {
      main_control();
      return;
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
  in_break = !in_break;
  console.log("in_break value: ", in_break);

  counting.pause();

  if (in_break){
    console.log("passed display time");
    display_time($break_time.value, "00");
    
  } else {
    $session.value = parseInt($session.value) + 1;
    display_time($session_time.value, '00');
  } 
  counting.reset();
}

function display_time(minutes, seconds){
  var min = minutes.toString();
  var sec = seconds.toString();
  var curr_time = min + ":" + sec;
  console.log("current time is ", curr_time);
  document.getElementById("current_time").value = curr_time;
}




function change_display_type(){
  var displays = ['full', 'Minutes', '5 Min Warning'];
  disp += 1;
  var display_option = disp % 3;
  display_type = displays[display_option];
  console.log("Display change");
}












