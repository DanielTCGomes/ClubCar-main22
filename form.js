import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyDf0GpY6l9wL4lZ8p7bEoZ5zLLNJnrqLRk",
  authDomain: "club-car-5d71f.firebaseapp.com",
  projectId: "club-car-5d71f",
  storageBucket: "club-car-5d71f.appspot.com",
  messagingSenderId: "465176495490",
  appId: "1:465176495490:web:fd189137e7577c32cdbb9b"
};


const app = initializeApp(firebaseConfig);


 const auth = getAuth(app);


  document.getElementById("reg-btn").addEventListener('click', function(){
   document.getElementById("register-div").style.display="inline";
   document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
 document.getElementById("register-div").style.display="none";
 document.getElementById("login-div").style.display="inline";

});

  document.getElementById("login-btn").addEventListener('click', function(){
   const loginEmail= document.getElementById("login-email").value;
   const loginPassword =document.getElementById("login-password").value;

   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box2").style.display="inline";
    document.getElementById("login-div").style.display="none";
     document.getElementById("result");
     
     setTimeout(function() {
      window.location.href = "/main.html"
    }, 3000); 

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("login-div").style.display="none";
     document.getElementById("result").innerHTML="Usuário ou Senha Incorretos: <br> <br> Verifique se: Seu E-mail está digitado corretamente. <br> <br> Verifique se: Sua senha possui ao menos 6 digitos.  ";

  })
});


  document.getElementById("register-btn").addEventListener('click', function(){

   const registerEmail= document.getElementById("register-email").value;
   const registerPassword =document.getElementById("register-password").value;

   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Bem-Vindo: "+registerEmail+" <br> <br>  Sua conta foi registrada com suscesso!!";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
     document.getElementById("register-div").style.display="none";
     document.getElementById("result").innerHTML="Erro no Cadastro: <br> <br> Verifique se: Seu E-mail está digitado corretamente. <br> <br> Verifique se: Sua senha possui ao menos 6 digitos. <br> <br> Se Não : Este E-mail já foi Cadastrado. <br>";

  });
});


document.getElementById("log-out-btn").addEventListener('click', function(){
  signOut(auth).then(() => {
     document.getElementById("result-box").style.display="none";
       document.getElementById("login-div").style.display="inline";
  }).catch((error) => {
     document.getElementById("result").innerHTML="Erro de Autenticação ! <br>";
  });

});
