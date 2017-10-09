pedimos las cifras a traves de un prompt
y la convertimos a mayusculas para que nnos de mayusculas siempre

descartamos los espacios  buscando con indexOf un espacio vacio
asi si indexOf escuentra un espacio el valor es diferente de -1 , si se cumple nos da alerta "no se admiten espacios vacios" y si no, sigue

descartamos los numeros buscando los numeros del 1 al 9 con indexOf   

si indexOf encuentra una numero del 1 al 9 no nos daria -1 y si, nos daria un numero mayor que cero
si eso se cumple creamos un array con esos elementos
si ese array llega a tener mas de un elemento entonces es porque se encontro un numero y entonces nos saldra una alerta "no se admiten numeros"

si eso no pasa continuamos a cifrar el codigo

 transformando a codigo cesar

 aplicamos la formula de codigo cesar y lo introducimos a un array

 luego unimos los elementos de ese array con join
 y nos retorna como resultado las cifras convertidas juntas


 y para el ocurre lo mismo solo que cambiamos en la formula de cifrado cesar los signos
