document.addEventListener('DOMContentLoaded', function(){
    console.log('Current URL:', window.location.href);
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const loggedin = urlParams.get('loggedin');
    const signedin = urlParams.get('signedin');

    console.log(loggedin);
    console.log(signedin);

    const anchor = document.getElementById('navbarDropdown');

    if (loggedin === 'true') {
        if(anchor){
          anchor.style.display = 'block';// Show the button
          console.log('log in');
        }
    }

    if (signedin === 'true') {
      if(anchor){
        anchor.style.display = 'block';// Show the button
        console.log('sign in');
      }
    }

    

})