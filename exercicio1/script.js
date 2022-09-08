let numero = Number(prompt("Digite seu número aqui"))

if(numero % 2 === 0){
    if(numero % 3 === 0){
        console.log("Divisível por 2 e 3")
    } else{
        console.log("Somente por 2")
    }
}
else{
    if(numero % 3 === 0){
        console.log("Somente por 3")
    }
    else{
        console.log("Nem 2 nem 3")
    }
}



if((numero % 2 === 0) || (numero % 3 === 0)) {
    console.log("Este número é divisível por 2 ou por 3")
} else {
    console.log("Este número não é divisível por 2 ou por 3")
}