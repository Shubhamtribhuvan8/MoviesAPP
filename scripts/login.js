
    document.querySelector("#customer-login").addEventListener("submit", signIn);
    var nameArr = JSON.parse(localStorage.getItem("account-data")) || [];
    function signIn() {
        event.preventDefault();
        let mail = document.getElementById("Email").value;
        let pass = document.getElementById("Password").value;
        nameArr.filter(function (elem) {
            return elem.mail == mail
        }).map(function (elem) {
            if (elem.pass == pass) {
                document.getElementById("wrongPass").textContent = "Sign in Successful"
                window.location.href="index.html"
                document.getElementById("showUsername").textContent = "Logged in as  "+mail+" ";
                // alert("Fill the Details!");
              console.log(elem);
                // showEmailUser  
                document.getElementById("showEmailUser").textContent = elem.firstName+" "; 
                // storing emailID as user 
                localStorage.setItem("user",elem.firstName)  
                console.log(localStorage.getItem("user")); 
               
            } else {
                document.getElementById("wrongPass").textContent = "invalid Credentials";
            }
           
        })

        // hompage redirect js.
        document.getElementById("Email").value = null;
        document.getElementById("Password").value = null;
       
      
    }
    