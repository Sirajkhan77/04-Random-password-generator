const passwordBox = document.getElementById("Password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@!#$%^&*()_+-{}:';[]<>,.|`~";

const all = upperCase+lowerCase+numbers+symbols;

const siraj = function createPassword(){
    let Password = "";
    Password += upperCase[Math.floor(Math.random()*upperCase.length)];
    Password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password += numbers[Math.floor(Math.random()*numbers.length)];
    Password += symbols[Math.floor(Math.random()*symbols.length)];

    while (length>Password.length){
    Password += all[Math.floor(Math.random()*all.length)];
    }
    passwordBox.value = Password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}