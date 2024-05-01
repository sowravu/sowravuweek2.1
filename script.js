
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  const fullName = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");
  
  
  function sendEmail() {
  
      const bodyMessage = `Name: ${fullName.value}<br> Phone: ${phone.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value} `
  
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "sowravusuresh943@gmail.com",
        Password: "DD0433844AF7DEC8C47616AA46786CEE6EB8",
        To: 'sowravusuresh943@gmail.com',
        From: "sowravusuresh943@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
      }).then(
          message => {
              if (message == "OK") {
                  Swal.fire({
                      title: "Success!",
                      text: "Message send successfully!",
                      icon: "success"
                  });
              }
          }
      );
  }
  
  function checkInputs() {
      const formscontrol = document.querySelectorAll(".item");
  
      for (const item of formscontrol) {
          if (item.value == "") {
              item.classList.add("error");
              item.parentElement.classList.add("error");
          }
  
          item.addEventListener("keyup", () => {
              if (item.value != "") {
                  item.classList.remove("error");
                  item.parentElement.classList.remove("error");
              }
              else {
                  item.classList.add("error");
                  item.parentElement.classList.add("error")
              }
          });
      }
  }
  
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      checkInputs();
      sendEmail();
  })
  
  });