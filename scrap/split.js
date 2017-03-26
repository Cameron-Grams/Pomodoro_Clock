function split(str){
  var min_sec_split =  str.match(/:/);
  var min_sec_index = str.indexOf(min_sec_split);
  var minutes = str.substring(min_sec_index, 0);;
  var seconds = str.substring(min_sec_index+ 1);
  console.log(minutes);
  console.log(seconds);
}

var test_val = true;

function switch_val(){
  test_val = !test_val;
  return test_val;
}

split("28:15");
g = switch_val();

console.log(g);
