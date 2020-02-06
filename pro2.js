$(document).ready(function(){
setInterval(displayclock,500);                //current timer
function displayclock(){
    var time=new Date();
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
   
    document.getElementById("currenttime").innerHTML=hrs + ":" + min + ":" + sec 

}
});

function displayClock(){ 
var x = setInterval(function() {
  var partyTime =document.getElementById("partytime").value;
 
   
   let date = new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear();

   var distance = new Date(date + " " + partyTime).getTime() - new Date().getTime();

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("cd").innerHTML =  hours + ":"
  + minutes + ":" + seconds;

  var modal = document.getElementById("myModal")
  var span =document.getElementById("close"); 

  if(hours==0 && minutes==0 && seconds==0)
  {
    var modal = document.getElementById("myModal")
    var span =document.getElementById("close"); 
  
     
       modal.style.display="block";
    
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
  }

}, 500);



}

// function inCheck(){
//     var partyTime =document.getElementById("partytime").value;
//     console.log(partyTime);
//     if(partyTime <= (new Date().getTime()))
//     {
//         document.getElementById("error").innerHTML="please enter valid time";
//     }
// }


