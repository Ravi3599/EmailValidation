const prompt = require("prompt-sync")();
let mail = prompt("Enter mail id to validate : ");
const mailRegex= RegExp("[a-zA-Z]*[@]{1}[bridgelabz][.a-z]*$");
function validateMail(mail){
    if(mailRegex.test(mail)){
        console.log("Mail is is valid");
    }
    else{
        throw mail+" Mail is Invalid";
    }
}
try{
    validateMail(mail);
}
catch(e){
    console.error(e);
}