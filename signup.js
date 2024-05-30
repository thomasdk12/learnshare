validate = (e) =>{
  event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password2').value;
  let emailtry = emailREGEX;
  if(emailtry.test(email)){

  }
  else{
    alert('check email');
  }
  if(password.length>8)
    {
      alert('pasword must be longer than 8')
    }
    
    



}