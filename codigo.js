let español=["español","Jorge","Cofla","Raul","Carlos"];
let ingles=["ingles","Pedro","Pablo","Cofla","Raul"];
let aleman=["aleman","Sara","Karla","Pable","Raul"];

function materia(nombreMateria){
    document.write(`El profesor es: ${nombreMateria[1]} <br>`);
    let subcadena=nombreMateria.slice(2);
    document.write(`Los Alumnos son: ${subcadena.join()} <br>`);
}

function cuantas(){
    let cont=0;
    if (español.includes("Cofla")){
        cont++;
        document.write(`Cofla esta en esta clase de español y el profesor es ${español[1]} <br>`)

    }
    if(ingles.includes("Cofla")){
        cont++
        document.write(`Cofla esta en esta clase de ingles y el profesor es ${ingles[1]} <br>`)
    }
    if(aleman.includes("Cofla")){
        cont++;
        document.write(`Cofla esta en esta clase de aleman y el profesor es ${aleman[1]}`)
    }

    document.write(`Cofla esta en ${cont} clases`)
}

materia(aleman);
cuantas();
