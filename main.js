let NombreEmpleado = " ";
let Sexo = " ";
let numEmpleados = 0;
let Edad = 0;//Math.round(Math.random() * (90 - 19) + 19);
let CantidadVentas = 0;
let validacion = false;
let comision = 6;
let SueldoBase = 0;
let ComisionPorVenta = 0;
let SueldoFinal = 0;

while(numEmpleados <= 0){
    numEmpleados = ReadStringToInt("Indica cuantos empleados en total hay");    
}

function ReadStringToInt(message){
    return parseInt(prompt(message));
}
function ReadStringToFloat(message){
    return parseFloat(prompt(message));
}

for (let i = 0; i < numEmpleados; i++) {
    do{
        alert('Introduce la informacion correcta');
        Sexo = prompt('Indica tu sexo [M] o [F]');
        console.warn("Para que sea un nombre valido debe tener como minimo 4 caracteres");
        NombreEmpleado = prompt("indique su nombre");
        Sexo = Sexo.toUpperCase();
        SueldoBase = ReadStringToFloat('Indica Tu sueldo Base');
        CantidadVentas = ReadStringToFloat('Indica la cantidad de Ventas');
        Edad = ReadStringToInt("Indica tu edad");
        validacion = (Edad > 0 && NombreEmpleado.length >= 4 && CantidadVentas > -1 && (Sexo == 'M' || Sexo == 'F') );
    }while(!validacion)
    // const terceraEdad
    let BonoTerceraEdad = (Edad > 60 && Sexo == 'M') || (Edad >= 55 && Sexo == 'F') ? 40000 : 0;
    // comision = SaberComision(1,75000,5,CantidadVentas, SaberComision(90001, 200000, 7, CantidadVentas,SaberComision(300000,1000001,8,CantidadVentas,SaberComision()))) 
    if(CantidadVentas > 0 && CantidadVentas < 75000){
        comision = 5;
    }else if(CantidadVentas >= 90000 && CantidadVentas < 200000){
        comision = 7;
    }else if(CantidadVentas >= 300000 && CantidadVentas < 1000000){
        comision = 10;
    }else if(CantidadVentas <= 0){
        comision = 0;
    }
   
    ComisionPorVenta =  (SueldoBase * (comision/100));
    SueldoFinal = parseFloat(SueldoBase + parseFloat(ComisionPorVenta.toFixed(2)) + BonoTerceraEdad);
    const message = `El ingreso del "${i +1 }°" vendedor cuyo nombre es ${NombreEmpleado} esta basado en: su sueldo base: ${SueldoBase}, el monto mensual de sus ventas: ${CantidadVentas},
    el procentaje de comision por ventas: ${comision}%, el monto de comision por venta: ${ComisionPorVenta}, bono tercera edad: ${BonoTerceraEdad}. Total: ${SueldoFinal.toFixed(2)}`;
  
    console.log(message);
    alert(message);
 
}
//  console.log({NombreEmpleado, Sexo, CantidadVentas});
//  console.log(validacion);