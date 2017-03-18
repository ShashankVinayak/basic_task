var runMain = function(){

    //Reference for the DOM elements
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var emailId = document.getElementById('email');
    var password = document.getElementById('password');

    //First and Last Name Validation
    var nameCheck = function(event){
        var regName = /.*\d+.*/;
        var name = event.target.value;
        if(name.match(regName)){
            alert('Name cannot have numbers');
            event.target.value = '';
        }
    }

    //Email-Id Validation
    var emailIdCheck = function(event){
        var regEmailId = /\w+@\w+\.\w+/;
        var emailId = event.target.value;
        if(!emailId.match(regEmailId)){
            alert('Invalid Email Id.\nFormat: <characters>@<characters>.<characters>');
            event.target.value = '';
        }
    }

    //Password Validation
    var passwordCheck = function(event){
        var regPassword = /\w*[!@#$%^&*()]+\w*/;
        var password = event.target.value;
        if(password.length < 8){
            alert('Password should be atleast 8 characters in length');
            event.target.value = '';
            return;
        }
        if(!password.match(regPassword)){
            alert('Password should contain atleast 1 special character');
            event.target.value = '';
        }
    }

    //Event Listeners
    firstName.addEventListener('blur',nameCheck);
    lastName.addEventListener('blur',nameCheck);
    emailId.addEventListener('blur',emailIdCheck);
    password.addEventListener('blur',passwordCheck);
}

window.addEventListener('load',runMain);