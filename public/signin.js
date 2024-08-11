document.addEventListener('DOMContentLoaded', function() {

    const email = document.getElementById('exampleInputEmail1');
    const passw = document.getElementById('exampleInputPassword2');
    const email_error= document.getElementById('email_error');
    const pass_error = document.getElementById('pass_error');
    const passreq = document.getElementById('requirement');
    const form = document.getElementById('form');

    form.addEventListener('submit', (e)=>{
        if(email.value=== '' || email.value === null){
            e.preventDefault();
            email_error.innerHTML= "Email is required";
        }else{
            email_error.innerHTML= "";
        }

        if(passw.value === '' || passw.value === null){
            e.preventDefault();
            pass_error.innerHTML= "Password is required";
        }else{
            pass_error.innerHTML= "";
            //below code does not work
           if(passw.value.lenght <= 7){
               e.preventDefault();
               passreq.innerHTML= "Your password must have at least 8 caracters";
           }else{
               passreq.innerHTML= "";
           }
        }
    
    })
})
