//votre code ici

function printNumbers(nb){
    let tab = []
    let message
    for (let i = 1 ; i<nb+1; i++){
        tab.push(i)
    }
    message = tab.toString().replace(/,/g,' ')
    return message
}

export default printNumbers
