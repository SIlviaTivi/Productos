


var isValidCard= function(isvalid){

//descartando espacios

//si indexOf nos resulta un numero distinto de -1 nos indicaria que encontro un espacio entonces envia un mensaje de alerta y si no,el numero ingresado solo cambia de variable a CardNumber
isvalid.indexOf(' ')!==-1 ? alert("NO se admiten espacios") :
  numbers = isvalid ;

// algoritmo de Luhn

   //obteniendo solo elementos pares en arrays
    var Arr=[];
      for (var i=(numbers.length-1)/2; i>0; i--){  //obteniendo elementos de las posiciones pares invertida y dividiendo/2 para eliminar espacios vacios
      var pares=numbers.charAt(i*2-1);
      Arr.push(pares)
      var SoloPar= Arr;  }
    Arr   //array de elementos de las posiciones pares

   //multiplicando los elementos de array de las posiciones pares x2
    var ArrSuma=[]
      for (var j=0; j<SoloPar.length; j++){
      var Por2= SoloPar[j]*2;
      ArrSuma.push(Por2);    }
     ArrSuma //array de elementos de las posiciones pares multiplicados por 2

    // obteniendo solo elementos de las posiciones impares inventida
    var Arr2=[];
      for (var u=(numbers.length-1)/2; u>=0; u--){
      var impares=numbers.charAt(u*2);
      Arr2.push(impares);
    }
    Arr2
     // uniendo arrays
      var Arrconc= ArrSuma.concat(Arr2)
      Arrconc // arrays unidos
      // Uniendo todos los elementos de uno o dos digitos como string
      Junt=Arrconc.join('');
      Junt// elementos unidos como string

     //sumando todos los digitos unidos como string
       sum1=0
       for (var k=0; k<Junt.length; k++){
       var num= parseInt(Junt.charAt(k));// convirtiendo de string a number
       sum1+=num }
// saliendo del algoritmo de Luhn

  sum1

// si Sum1 nos resulta NaN quieres decir que calculo un digito diferente de un numero , entonces nos saldra una alerta de no se admiten "solo se admiten numeros"
// si sum1 es divisor de 10 el numero de tarjeta sera valida y si no, sera invalida

  if(isNaN(sum1) === true){
    var mensaje = 'Solo se admiten numeros';
    alert(mensaje) }
  else if(sum1%10===0){
    mensaje = 'El numero de tu tarjeta es valida'
    alert(mensaje)}

  else{
     mensaje = 'El numero de tu tarjeta NO es valida'
    alert(mensaje)  }

  return mensaje
}
isValidCard(prompt('Ingresa el numero de tu tarjeta de credito'));
