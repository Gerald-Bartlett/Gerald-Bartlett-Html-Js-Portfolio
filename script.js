function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  


 
  var x = document.getElementById("myVideo"); 
  
  function playVid() { 
    x.play(); 
  } 
  
  function pauseVid() { 
    x.pause(); 
  } 
