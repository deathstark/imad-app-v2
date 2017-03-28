function validation(){
    var Username  = document.getElementById("Username");
    var password  = document.getElementById("password");

    var check = true;
    
    Username.classList.remove("invalid");
    password.classList.remove("invalid");
    
    if(username.value === ""){
        Username.classList.add("invalid");
        check = false;
    }
    if(password.value === ""){
    //    alert("");
        password.classList.add("invalid");
        check = false;
    }
    if(!check){
        alert("All Fields are mandatory, can't be empty");

        return false;
    }
    if(password.value.length >= 4 && password.value.length <= 15){}
    else{
        alert("Password lenght should be betweem 4 to 15 Charaters");
        password.classList.add("invalid");  
        cpassword.classList.add("invalid");
        return false;
    }
    return true;
}
