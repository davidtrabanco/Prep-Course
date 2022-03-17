// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let newMatrix=[];
  let obKeys=Object.keys(objeto);
  let obValues=Object.values(objeto);

    for (let index = 0; index < obKeys.length; index++) {
        newMatrix.push( [ obKeys[index] , obValues[index] ])
    }
    
  return newMatrix
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  string=[...string]; //convierto el string en array
  string=string.sort(); //lo ordeno

  //reduzco el array para iterarlo:
  let arrayIter=string.reduce((acc,item)=>{
      if(!acc.includes(item)){acc.push(item)}
      return acc
  },[]);

  // creo el objecto de salida
  let object ={};

  //recorro el array reducido
  for (let index = 0; index < arrayIter.length; index++) {
      let letter = arrayIter[index]
      //filtro el array string por cada letra, al array devuelto calculo la longitud y la asigno en el objecto:
      object[letter]=(string.filter((x)=> x===letter)).length
  }
  return object;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let sArray = [...s];
  return sArray.sort((a,b)=>{
      if(a === a.toLowerCase() && b === b.toUpperCase() ){return 1}
      if(a === a.toUpperCase() && b === b.toLowerCase() ){return -1}
  }).join("")
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  array = str.split(" ")
  let strMirror=""
  
  array.forEach((element,index) => {
      strMirror += ([...element].sort(()=>-1)).join("")
      if(!(index+1===array.length)){strMirror+=" "}//Agrego espacios entre cada elemento excepto en el ultimo
  });
  
  return strMirror
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let array = [...numero.toString()]

  if(numero==(array.sort(()=>-1).join(""))){
      return "Es capicua"
  }else{
    return "No es capicua"
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  arrary=[...cadena]
  return (arrary.filter((letter)=>letter!=="a" && letter!=="b" && letter!=="c")).join("")

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a,b)=>a.length-b.length)
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  return arreglo1.filter((item)=>arreglo2.includes(item))

 /*  for (let index = 0; index < (arreglo1.length + arreglo2.length); index++) {
    
    if(!arreglo2[index]){break}//si el elemento no existe salgo
    
    if(arreglo1.includes(arreglo2[index])){
      array.push(arreglo2[index])
    }
  } */

  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

