// function sendMail() {
//     var link = "mailto:yuzokuramae@gmail.com"
//     		 + "&subject=" + encodeURIComponent(document.getElementById('name').value)
//     		 + "&body=" + encodeURIComponent(document.getElementById('message').value)
//     ;
    
//     window.location.href = link;

//     alert('E-mail enviado com sucesso!')
// }

function sendMail() { 
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: encodeURIComponent(document.getElementById('email').value), 
      To: 'yuzokuramae@gmail.com', 
      From: encodeURIComponent(document.getElementById('name').value), 
      Body: encodeURIComponent(document.getElementById('message').value), 
    }) 
      .then(function (message) { 
        alert("mail sent successfully") 
      }); 
  } 