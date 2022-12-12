
// js for navbar ends here

    document.querySelector("form").addEventListener("submit", myForm);
    var nameArr = JSON.parse(localStorage.getItem("account-data")) || [];
    function myForm() {
      event.preventDefault();
      var obj = {
        firstName: document.getElementById("CreateAccountFirstName").value,
        lastName: document.getElementById("Creat_LastName").value,
        mail: document.getElementById("CreateAccountEmail").value,
        pass: document.getElementById("Creat_Password").value,
      }
      console.log(obj);
      if (obj.lastName == "" || obj.mail == "" || obj.pass == "" || obj.firstName == "") {
        alert("Fill All Details")
      } else {
        nameArr.push(obj);
        alert("Account Created Successfully, You will be redirected to login Page!")
      }
      localStorage.setItem("account-data", JSON.stringify(nameArr));
  
     
      document.getElementById("CreateAccountFirstName").value = null;
      document.getElementById("Creat_LastName").value = null;
      document.getElementById("CreateAccountEmail").value = null ;
      document.getElementById("Creat_Password").value=null;
 
      window.location.href="login.html"
  
    }