var $session = document.getElementById("session_number");
var $current_time = document.getElementById("current_time");
var $break_time = document.getElementById("break_time");
var $session_time = document.getElementById("interval_time");

var $sound = document.getElementById("end_beep");
$sound.src = " http://soundbible.com/grab.php?id=1806&type=mp3";
$sound.load();

var state_bg = true;
var in_break = false;
var counting;


var curr_time = $current_time.value;
var disp = 0;
var display_type = "full";








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

//sound for the alaram
function alarm_sound(){
  $sound.play(); 
}

//change display for the alarm
function alarm_display(){
  if (state_bg){
    $current_time.style.backgroundColor = "white";
  } else {
    $current_time.style.backgroundColor = "red";
  }
  state_bg = !state_bg;
}


//control for two alarm functions
function end_alarm(){
  for (var i = 1; i <= 3000; i += 1000){
    setTimeout(alarm_display, i);
    setTimeout(alarm_sound, i);
    setTimeout(alarm_display, i + 500);
  }
  setTimeout(return_display, 3200);
}

function return_display(){
  document.getElementById("current_time").style.backgroundColor = "#96a834";
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
//    curr_time = $current_time.value;
    var min_sec_split = curr_time.split(':');
    var minutes = parseInt(min_sec_split[0]);
    var seconds = parseInt(min_sec_split[1]);

    if (seconds == 0 && minutes == 0) {
      end_alarm();
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
  curr_time = min + ":" + sec;
  console.log("current time is ", curr_time);

  if (display_type === "full"){
    document.getElementById("current_time").value = curr_time;
  } else if (display_type === 'Minutes') {
    document.getElementById("current_time").value = min;
  } else if (display_type === '5 Min Warning'){
    if (min <= '5'){
     document.getElementById("current_time").value = curr_time;
    } else {
      document.getElementById("current_time").value = ' ';
    }
  }
}




function change_display_type(){
  var displays = ['full', 'Minutes', '5 Min Warning'];
  disp += 1;
  var display_option = disp % 3;
  display_type = displays[display_option];
  console.log("Display change");
}












