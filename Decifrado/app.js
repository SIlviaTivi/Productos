
var PosiFija = 33

var lon=prompt('digitos a cifrar')
var letras=lon.toUpperCase()

// creando funcion
var decipher = function(Cifrar,Position){

   //descartando espacios
   // si indexOf escuentra un espacio el valor es diferente de -1 , si se cumple nos da alerta y si no, sigue
   Cifrar.indexOf(' ')!==-1 ? alert("NO se se admiten espacios"):
    Ci= Cifrar ; // usaremos la variable ci para cifrar las letras

   //descartando numeros
   //si indexOf encuentra una numero del 1 al 9 no nos daria -1 y si nos daria un numero mayor que cero
   // si eso se cumple entra el elemento al array con push
    Arr=[]
      for (var i=0; i<10; i++){
      var posit = letras.indexOf(i)
       if(posit>=0){ Arr.push(posit) }
       };
    // si se encuentra almenos un valor en el array osea numero de elementos mayor a 0 , quiere decir que almenos se encontro un numero y nos da alerta
      if(Arr.length>0){  alert('no se admiten números')}
      else{  var result = letras
       }

// transformando a codigo cesar

     LetArr=[];
       for (var u=0; u<Ci.length; u++){ // ci= cifras que no son numeros
       var CadaLetString= result.charAt(u)// obteniendo los elementos del string
       var changeLetters= String.fromCharCode((CadaLetString.charCodeAt()+65-PosiFija)%26+65) // formula de cifrado cesar
           LetArr.push(changeLetters); // introduciendo los elementos al array LetArr
           }

// uniendo los elementos con join
        var Juntas=LetArr.join('')
// nos retorna la union de las cifras convertidas
       return alert(Juntas);
 }

decipher(lon,PosiFija);
