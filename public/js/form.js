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
    // if (email.value.trim() == "" || pwd.value.trim() == "")
    // {
    //     alert("the fields are empty!!!");
    //     return false;
    // } else if ( pwd.value.length<=5){
    //     alert("too short!!");
    //     pwd.style.border ="2px solid red";
    //     return false;
    // }
    // else{
    //     return true;
    // }
