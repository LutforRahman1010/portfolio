function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}



function validation(){
  alert('ok');
  return false;
 first = document.getElementById("first").value;
 last= document.getElementById("last").value;
 phone = document.getElementById("phone").value;
 email = document.getElementById("email").value;
 pass = document.getElementById("pass").value;
 error = 0;

    function checkValue(data){
        if(data==""){
    	     return false;
        }else{
    	    return true;
        }
   
    if(checkValue(first)==false){
    	error = error+1;
         }
    if(checkValue(last)==false){
    	error = error+1;
         }
    if(checkValue(phone)==false){
    	error = error+1;
         }
    if(checkValue(email)==false){
    	error = error+1;
         }
    if(checkValue(pass)==false){
    	error = error+1;
         }

       console.log(error);            
    if(error=0) {
        return true;
    } else{
    	return false;
    }   

    ini=1900     

    }