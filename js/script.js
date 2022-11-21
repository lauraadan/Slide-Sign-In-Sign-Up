var signInBtn = document.getElementById("signIn");  
var signUpBtn = document.getElementById("signUp");  
var firstForm = document.getElementById("form1");  
var secondForm = document.getElementById("form2");  
var container = document.querySelector(".container");  

signInBtn.addEventListener("click", () => {  
      container.classList.remove("right-panel-active");  
 });  
 signUpBtn.addEventListener("click", () => {  
      container.classList.add("right-panel-active");  
 });  
 firstForm.addEventListener("submit", (e) => e.preventDefault());  
 secondForm.addEventListener("submit", (e) => e.preventDefault());  

 