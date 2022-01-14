// If...Else

// Se a hora estiver entre 08:00 e 12:00: Bom dia!
// Se a hora estiver entre 12:00 e 18:00: Boa tarde!
// CAso contrário: Boa noite!
let hora = 10;

if(hora > 6 && hora < 12){
    console.log ("bom dia");
}

else if (hora > 12 && hora < 18){
    console.log("boa tarde");
}

else {
    console.log("Boa Noite");
}