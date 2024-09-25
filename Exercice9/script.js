// votre code ici
const errorMessages = {
    minor: "Vous êtes mineur.",
    major: "Vous êtes majeur.",
    senior: "Vous êtes senior.",
}
function checkAge(int){
    let afficheMessage
    if (int <18){
        afficheMessage = errorMessages.minor
    }
    if (int >= 18 && int < 65){
        afficheMessage = errorMessages.major
    }
    if(int >= 65){
        afficheMessage = errorMessages.senior
    }
    return afficheMessage
}
export default checkAge;
