
document.addEventListener('DOMContentLoaded', function() {
    
    
    const namee= document.getElementById('Username');
    const email= document.getElementById('exampleInputEmail1');
    const password= document.getElementById('exampleInputPassword1');
    const form= document.getElementById('form');
    const check= document.getElementById('exampleCheck1');
    const name_error= document.getElementById('name_error');
    const mail_error= document.getElementById('mail_error');
    const pass_error= document.getElementById('pass_error');
    const passreq = document.getElementById('passwordrequirement');
    const check_error= document.getElementById('check_error');
    
    

    form.addEventListener('submit',(e)=>{
        if(namee.value === '' || namee.value === null){
            e.preventDefault();
            name_error.innerHTML = "Name is required";
        }else{
            name_error.innerHTML= "";
        }
        
        if(email.value === '' || email.value === null){
            e.preventDefault();
            mail_error.innerHTML = "Email is required";
        }else{
            mail_error.innerHTML= "";
        }
    
        if(password.value === '' || password.value === null){
            e.preventDefault();
            pass_error.innerHTML = "Password is required";
        }else{
            pass_error.innerHTML= "";
        } 
    
        if(password.value.lenght <= 7){
            e.preventDefault();
            passreq.innerHTML= "Your password must have at least 8 caracters";
        }else{
            passreq.innerHTML= "";
        }
    
        if(!check.checked){
            e.preventDefault();
            check_error.innerHTML = "Prove you are not a robot";
        }else{
            check_error.innerHTML= "";
        }

    })

    
})
