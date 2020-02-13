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

function cdFunction(){ 
var x = setInterval(function() {
  // var partyTime =document.getElementById("partytime").value;
  //  let date = new Date().getDate() + '-' + new Date().getMonth() + '-' + new Date().getFullYear();

   var distance = new Date($('input[type="datetime"]').val()).getTime() - new Date().getTime();

 var days=00;  
 var hours = 00;
 var minutes = 00 ;
 var seconds = 00;

//  console.log(new Date($('input[type="datetime"]').val()).getTime());
   
   days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
   hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  
 document.getElementById("cd").innerHTML =days + ":" + hours + ":" + minutes + ":" + seconds;

  var modal = document.getElementById("myModal");
  var span =document.getElementById("close"); 

  if(days<0 && hours<0 && minutes<0 && seconds<0)
  {
    document.getElementById("cd").innerHTML="please enter the upcoming date or time";
  }

  if(days<0 && hours==0 && minutes==0 && seconds==0)
  { 
    
      clearInterval(x);
    
    var modal = document.getElementById("myModal")
    var span =document.getElementById("close"); 
  
     
       modal.style.display="block";
    
    //     span.onclick = function() {
    //     modal.style.display = "none";
        
    // }
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //       modal.style.display = "none";
    //     }
    //   }
  }

}, 1000);


}

