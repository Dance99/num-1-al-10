let numero;
let valido = false; 

while (!valido) {
    numero = parseInt(prompt("Ingresa un número del 1 al 10: ")); 

    switch (numero) { 
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:

            valido = true; 
            break;
            
        default:
            alert("Por favor, ingresa un número válido entre 1 al 10.");
            break;
    }
} 

alert("Gracias");