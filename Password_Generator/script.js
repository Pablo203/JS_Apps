var password = " ";
var character = " ";
var number = 0;
var which = 0;
var form = document.getElementById("pass_long");
var a = " ";
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "|", ":", ";","<", ">", "?", ",", "."];
var special_long = special.length;

password_gen = () => {
    var long = parseInt(form.value);
    password = " ";
    console.log(typeof long);
    console.log(long);
    if (long !== NaN) {
        for (let i = 0; i < long; i++) {
            which = Math.floor(Math.random() * 4);
            if (which == 0) {
                number = rand(48, 57);
                character = String.fromCharCode(number);
                password += character;
            } else if (which == 1) {
                number = rand(65, 90);
                character = String.fromCharCode(number);
                password += character;
            } else if (which == 2) {
                number = rand(97, 122);
                character = String.fromCharCode(number);
                password += character;
            }
            else if(which == 3){
                number = Math.floor(Math.random() * special_long);
                password += special[number];
            }
            document.getElementById("password_show").innerHTML = password;
        }
        
    }
}

rand = function (min, max) {
    var generated = Math.floor(Math.random() * (max - min)) + min;
    return generated;
}