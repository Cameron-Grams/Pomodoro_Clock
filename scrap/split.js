function split(str){
  var min_sec_split =  str.match(/:/);
  var min_sec_index = str.indexOf(min_sec_split);
  var minutes = str.substring(min_sec_index, 0);;
  var seconds = str.substring(min_sec_index+ 1);
  console.log(minutes);
  console.log(seconds);
}

split("28:15");
