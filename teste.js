/*.Faça um algoritmo que leia um array, e o preencha com números inteiros, 
se esse array tiver alguma posição com valor zero você deve eliminar essa posição. Para fazer isso,
 todos os elementos à frente do valor zero devem ser movidos uma posição para trás no vetor. 
 Ex.: entrada - array[2,6,8,0,6,4,3,2,0,7] saída - array[2,6,8,6,4,3,2,7] 


*/

var array = []
var arraySuporte = []
var indexSup = 0
for(var contador = 0; contador < 5; contador++){
    array[contador] = parseInt(prompt("Insira um número"))
}

console.log(array)

for(var contador = 0; contador < 5; contador++){
    if(array[contador] != 0){
        arraySuporte[indexSup] = array[contador]
        indexSup++
    }
}

array = arraySuporte
console.log(array)