
function myFunction(){
    let button = document.querySelector(".btn");
    button.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('button clicked!');
        const email = document.getElementById("email").value.indexOf("@");
        submitOK = "true";
        const emailMsg = document.querySelector(".message")
        if (email == -1) {
            emailMsg.innerHTML = "Please enter a valid email address"
            console.log("Not a valid e-mail!");
            submitOK = "false";
        }
        else{
            emailMsg.innerHTML = "Thank you your email address :"+email+ "has been added to out mailing list!"
            return false;

        }
        
    })

}










    
//         const emailName = document.getElementById("email").placeholder;
//             document.getElementById("message").innerHTML= emailName
//             if(emailName != null ){
//                 console.log(emailName)
//                 emailName.innerHTML = "Thank you! Your email address" +emailName+ "has been added to our mailing list"
//              }else{
//                 emailName.innerHTML= "Please enter a valid email address"

//             }         
//             console.log('button clicked')




