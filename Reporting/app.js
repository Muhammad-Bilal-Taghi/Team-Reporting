
       function signIn()
       {
           
           var dist = document.getElementById('sign');
           
               window.location.href="home.html";
           
    }
       
    var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let signIn = () => {
  var email = document.getElementById('user').value
  var password = document.getElementById('pass').value
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((data) => {
          console.log(data)
      })
      .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage)
      });
} 
