let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

// your code here


//console.log(counts);

function contarCaracteres(str) {
    //Pasamos la cadena a minusculas
    str = str.toLowerCase();
    //quitamos los espacios en blanco
    str = str.replace(/\s/g, "");
    let counts = {}; //Donde guardamos los resultados
    for(let char in str){ //Cogemos el indice de cada caracter
      if(str[char] in counts) { //Si ya existe, simplemente aumentamos el contador
          counts[str[char]] = counts[str[char]] + 1
      } else { // Si no existe, lo inicializamos a 1
          counts[str[char]] = 1
      }
  }
    //Mostar los resultados
    tmp = ``
    Object.keys(counts).forEach(function(letra){
      tmp += ` ${letra} : ${counts[letra]}, `
    })
    return tmp
  }
  console.log(contarCaracteres(par))

  // \n:hace salto de fila