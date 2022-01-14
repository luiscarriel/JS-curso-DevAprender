// Operadores lógicos e (&&)
// Retorna TRUE se os dois operandos forem TRUE

// console.log (true && true);

// console.log (false && false);
// console.log (false && true);

// let MaiorDeIdade = true;
// let PossuiCarteiraDeTrabalho = true;
// let PodeAplicar = MaiorDeIdade && PossuiCarteiraDeTrabalho;

// console.log (PodeAplicar);


// OPerador lógico ou (||)
// Retornar TRUE se um dos operando forem TRUE
let MaiorDeIdade = false;
let PossuiCarteiraDeTrabalho = false;
let PodeAplicar = MaiorDeIdade || PossuiCarteiraDeTrabalho;

console.log ("pode aplicar:" ,PodeAplicar);



// Operador NOT (!)

let candidatoRecusado = !PodeAplicar;
console.log("Candidato Recusado", candidatoRecusado);