//Algoritmo
//crear variables y obtener su  valor
//preguntarme cual de los dos datos es mayor
//hacer la diferencia en el orden correspondiente
//devolver una respuesta

let edad = prompt("cual es tu edad?")
let edad2 = prompt("cual es tu edad de tu hermano?")

if (edad > edad2){
    let diferencia = edad - edad2;
    alert("tu hno y tu se llevan "+diferencia+" años, tu eres el mayor")

}

else if (edad < edad2){
    let diferencia2 = edad2 - edad;
    alert("tu hno y tu se llevan "+diferencia+" años, tu eres el menor");
}
else if (edad == edad2)
{
    let diferencia3 = edad2 - edad;
    alert("tu hno y tu se llevan "+diferencia+" 0 años, son mellizos");
}
else{
    alert(error)
}