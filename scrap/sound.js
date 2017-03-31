// "http://soundbible.com/grab.php?id=1252&type=mp3"


// http://soundbible.com/1806-Censored-Beep.html
var $sound = document.getElementById("beep");
$sound.src = " http://soundbible.com/grab.php?id=1806&type=mp3";
$sound.load();

var state_bg = true;
var $bg = document.getElementById("entire_bg");

function sound(){
  $sound.play();
}

function fury(){
  console.log(state_bg);

  if (state_bg){
    $bg.style.backgroundColor = "green";
  } else {
    $bg.style.backgroundColor = "red";
  }

  state_bg = !state_bg;
}
/*
function toggle_color(color1, color2,cycle_time, wait_time){
  setInterval(function first_color(){
    $bg.style.backgroundColor = color1;
    setTimeout(change_color, wait_time);
  }, cycle_time);
  function change_color(){
    $bg.style.backgroundColor = color2;
  }
}
*/
function make_sound(){
//  toggle_color("red", "blue", 1000, 500);
  for (var i = 1; i <= 3000; i += 1000){
    setTimeout(fury, i);
    setTimeout(sound, i);
    setTimeout(fury, i + 500);
  } 
}


console.log("Loaded");
