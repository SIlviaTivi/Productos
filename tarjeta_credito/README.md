

para descartar espacios buscamos la posicion de un espacios

si nos resulta un numero distinto de -1 nos indicaria que encontro un espacio entonces envia un mensaje de alerta y si no, continua

para el algoritmo de Luhn buscamos las posicione pares de menor a mayor para invertirla y la introducimos en un array
para que en el array podamos multiplicar sus elementos por 2 e introducirla en otro array

para luego juntarlas con el array de los elementos de las posiciones impares

luego concatenamos los arrays y unimos sus elementos

para luego sumarlos convirtiendolos de string a number con parseInt

sumando todos los digitos unidos como string


si la suma nos resulta NaN quieres decir que calculo un digito diferente a un numero,
 entonces nos saldra una alerta de no se admiten "solo se admiten numeros"

si la suma es divisor de 10 el numero de tarjeta sera valida y si no, sera invalida
