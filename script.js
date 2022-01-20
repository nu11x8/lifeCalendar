"use strict";

var timerId,cnt,c_age,age;

function stop() {
  clearInterval(timerId);
  console.log("stop");
}

function start() {

  c_age = parseInt(document.getElementById("current_age").value);
  let elements = document.getElementsByClassName('cell');
  let len = elements.length;

  timerId = setInterval(function(){
    let element = elements.item(cnt);
    element.style.background = 'rgb(220,220,220)'
    document.getElementById("age").innerText = age + "歳";

    cnt++;
    age = parseInt(cnt / 52);
    if(cnt === len){
      clearInterval(timerId);
    }
    if (cnt === c_age*52+1) {
      clearInterval(timerId);
    }
    console.log(cnt);    
  }, 200);
}

function init() {

  cnt = 0;
  age = 0;
  var main = document.getElementById("main");

  for (var i=0; i<80; i++) {
    var tr = document.createElement("tr");
    for (var j=0; j<52; j++) {
      var td = document.createElement("td");
      td.className="cell";

      var red = (i*3).toString(10);
      var green = (255-i*2).toString(10); 
      var blue = (30).toString(10); 

      td.style.background = 'rgb('+red+','+green+','+blue+')';
      
      tr.appendChild(td);
    }
    main.appendChild(tr);
  }

  

  



  // for (var i=0; i<len; i++) {
  //   let element = elements.item(i);
  //   setTimeout(chgColor(element), 100000);

  // }

  //setInterval(countUp, 1000);
}

// function chgColor(element) {
//   element.style.background = 'rgb(250,250,250)'
//   console.log(element);
// }