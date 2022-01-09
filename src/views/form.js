let email = document.getElementById("email");
let eror = document.getElementById("error");
// let pwd = document.getElementById("pwd");
function validate()
{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email.value))
    {
        eror.innerHTML = "valid";
        eror.style.color = "green";
        return true;
    } else {
        eror.innerHTML = "invalid";
        eror.style.color ="red";
        return false;
    }
}
   
