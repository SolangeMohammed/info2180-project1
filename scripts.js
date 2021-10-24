
function click(){
    const button = document.querySelector('.btn')
     button.addEventListener('click', handleClick)

    function handleClick(event){
        event.preventDefault();
        const email = document.getElementById("email").value; 
        const emailMsg = document.querySelector('.message');
        if (email == -1) {
            emailMsg.innerHTML = "Please enter a valid email address"
            console.log("Not a valid e-mail!");
                 }
        else{
            emailMsg.innerHTML = "Thank you your email address :" +email+ "  has been added to out mailing list!"
            console.log("valid");
            console.log(email);
            
             }
            
        
        }
       
            
    
    }

    



    













