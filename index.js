
var timeArr = new Array();
var firstTime = true;


function calculate(){

  var hour = document.getElementById("hours").value;
  var minute = document.getElementById("minutes").value;
  var time = document.getElementById("time").value;
  if(hour == "hour" || minute == "minute"){
    alert("please select a correct time")
    return;
  }

  var secounds = (hour * 60 * 60) + (minute * 60);
  var hourCopy = hour;
  var timeCopy = time;

secounds = secounds - 10800;
var i;
for (i=0 ; i< 4 ; i++){

  secounds = secounds - 5400;
  if (secounds <= 0){
  secounds+=43200;
  time = negateTime(time);
}
   var hours = Math.floor(secounds / 3600);
  //  secounds %= 3600;
   var minutes = Math.floor((secounds%3600) / 60);
   var obj =new Time(hours,minutes,time);

  timeArr.push(obj);

}
render(hourCopy,timeCopy);

}

function Time(hour,minute,time){
  this.hour = hour;
  this.minute = minute;
  this.time = time;
}

function negateTime(time){
  if(time == "PM")
  return time = "AM";
  return time = "PM";
}

function render(hourCopy,timeCopy){
  var j;
  var newArr = new Array();
  if(hourCopy == "12" ){

    timeCopy=negateTime(timeCopy);
    for(j=0; j<4; j++){
      timeArr[j].time =timeCopy;
    }
  }

  for(j=0; j<4; j++){
  if(timeArr[j].hour == "00")
  timeArr[j].hour = "12";
  if(timeArr[j].minute == "0")
  timeArr[j].minute = "00";
  newArr.push("<strong>" +timeArr[j].hour+":"+timeArr[j].minute+" " + timeArr[j].time + "</strong>");

}
show(newArr);
}
function show(newArr){

var x= document.getElementById("head").innerHTML=":لازم تنام في احدى الاوقات التالية";
var y= document.getElementById("content");
y.innerHTML=   newArr[3] + "   ,   " +newArr[2] + "   ,   " + newArr[1]+ "   ,   " + newArr[0];
}
