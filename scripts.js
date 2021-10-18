window.onload = function(){
    let form = document.querySelectorAll("#form-group");
    for(let i=0; i<form.length; i++){

        const submitMsg= document.getElementsByTagName('message');
        const submit = document.querySelector('.btn')
        submit.onclick= () =>{
            const email = document.getElementById('input email');
            const emailName = document.getElementById('placeholder');
            const emailMsg = document.getElementById("message");
            if(email(email)){
                emailMsg.innerHTML = "Thank you! Your email address" +emailName+ "has been added to our mailing list"
            }else{
                emailMsg.innerHTML= "Please enter a valid email address"

            }
            
            console.log('button clicked')
        }

    }
    
}
