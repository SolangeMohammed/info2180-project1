
window.onload = function (){

    let button = document.querySelector('button');
    let email = document.querySelector('input');
    let emailMsg = document.querySelector('.message');
button.onclick= () =>{
    
    if (email.value == "") {
        emailMsg.innerHTML = "Please enter a valid email address"
        return false
             }
    else{
        emailMsg.innerHTML = "Thank you your email address " +email.value+ "  has been added to out mailing list!"
        return false

         }
        
    
    }

}
       
       
            
    


    



    













