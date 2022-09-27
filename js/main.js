

function agarrarNumero(){
    const numero = Number(prompt("ingresa un numero "));
    if(numero===0){
        return 10;
    }
    return numero;
    

}
 
console.log(agarrarNumero);
const numero = agarrarNumero()

for(let i=1; i<=numero; i++){
    

    if(i%2===0 && i!=0){
        document.write(`<p>${i} es un numero par</p> `)

    }
    else{
        document.write(`<p>${i} es un numero impar</p> `)

    }

}

 

