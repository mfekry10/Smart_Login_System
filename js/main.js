/*================================================================*/
/* Sign Form Script signUp
/*================================================================*/

var signUserNameInput = document.querySelector("#signusername");
var signEmailInput = document.querySelector("#signemail");
var signPassInput = document.querySelector("#signpass");
// var signUpBtn = document.querySelector(".sign_up");
var sign_alert_message = document.querySelector(".sign_alert_message"); //All inputs are Required
var sign_alert_email = document.querySelector(".sign_alert_email"); // This email is exist

var allUsers ;

if(localStorage.getItem("Users") == null){
    allUsers =[];
}
else{
    allUsers = JSON.parse(localStorage.getItem("Users"));
}

/*========================================*/
/* Sign UP Scenario
/*========================================*/
// signUpBtn.addEventListener("click" , sign_register);
function sign_register(){

    if(signUserNameInput.value =="" || signEmailInput.value == "" || signPassInput.value ==""){
         sign_alert_message.classList.replace("d-none" , "d-flex");
         sign_alert_email.classList.replace("d-flex" , "d-none");
    }
    else if(existEmail() == true){
        sign_alert_email.classList.replace("d-none" , "d-flex");
        sign_alert_message.classList.replace("d-flex" , "d-none");
    }
    else{

        sign_alert_message.classList.replace("d-flex" , "d-none");
        sign_alert_email.classList.replace("d-flex" , "d-none");

        var registerUser = {
            signusername : signUserNameInput.value,
            signuseremail : signEmailInput.value,
            signuserpass : signPassInput.value
    
        }
        allUsers.push(registerUser);
        console.log(allUsers)
        localStorage.setItem("Users" , JSON.stringify(allUsers));
        // localStorage.clear();
    }
    
}
//Check email exist or not 
function existEmail(){
    for(var i = 0 ; i< allUsers.length ; i++){
        if(signEmailInput.value.toLowerCase() == allUsers[i].signuseremail.toLowerCase()){
            return true;
        }
        
    }
}



/*================================================================*/
/* Login Form Script index
/*================================================================*/

var emailInput = document.querySelector("#email");
var passInput = document.querySelector("#pass");
// var loginBtn = document.querySelector(".btn-outline-primary");
var alert_Message = document.querySelector(".alert_message");
var alert_message1 = document.querySelector(".alert_message1");


/*========================================*/
/* Login Scenario
/*========================================*/

// loginBtn.addEventListener("click",Login); // callback function 
function Login(){
    
    if(emailInput.value =="" || passInput.value == ""){
        alert_Message.classList.replace("d-none" , "d-flex");
        alert_message1.classList.replace("d-flex" , "d-none");
    }

    else if(compareEmailIfExist() == true){
        // console.log("welcome");
        // window.location.assign("new target URL"); 
        //or 
        window.location.replace("user.html");
        
        
    }

    else if(compareEmailNotExist() == true){
        alert_Message.classList.replace("d-flex" , "d-none");
        alert_message1.classList.replace("d-none" , "d-flex");
     }

   
 
}

//compare between email that you entered and email that exist in localstorge 
function compareEmailIfExist(){
    for(var i = 0 ; i< allUsers.length ; i++){
        if(emailInput.value.toLowerCase() == allUsers[i].signuseremail.toLowerCase() && passInput.value == allUsers[i].signuserpass){
            return true;
        }
    }
}

// in case not exist you should sign up
function compareEmailNotExist(){
    for(var i = 0 ; i< allUsers.length ; i++){
        if(emailInput.value.toLowerCase() != allUsers[i].signuseremail.toLowerCase()){
            return true;
        }
    }
}


/*================================================================*/
/* USer Page Script index
/*================================================================*/
function logout(){
    window.location.replace("index.html");
}