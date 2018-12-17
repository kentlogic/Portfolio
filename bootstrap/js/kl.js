function showMessage(status) {
   const x = document.getElementById("table");
  const y = document.getElementById("message");
  if(status=="noContent"){
  	 y.style.display = "block";
     x.style.display = "none"; 
    } else {
       x.style.display = "block";
      y.style.display = "none";      
    } 
}


