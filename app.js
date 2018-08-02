 alert("Welcome to ATM System");

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds();
    var d = date.getDay();
    var dayArray = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
    var day = dayArray[d];

    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
      
    var time = h + ":" + m + ":" + s + " " + session + " " +day;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
}

showTime();

var userArray = ["yasir","raza"];
var passArray = ["123","456"];
var amount = [25000,35000];


 var name = prompt("Please Enter Your Username : ");
 var pass = prompt("Please Enter Your Password : ");

name = name.toLowerCase();

for(var i = 0; i < userArray.length; i++){
        if(name == userArray[i] && pass == passArray[i]){
    
            var user = document.getElementById("user");
            user.innerHTML = "Welcome "+name.toUpperCase();
            user.style.paddingLeft = '20px';
            var balance = document.getElementById("balance");
            balance.innerHTML = "Your Account Balance : "+amount[i] +"/-";
            
            var trans = document.getElementById("trans");
            trans.innerHTML = "Select a transaction";
            trans.style.textAlign = 'center';
            trans.style.fontSize = '20px';
            break;
        }   
    }

