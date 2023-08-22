/* Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato, che va formattato in questo modo: nomecognomecolorepreferito23 
Esempio: fabiopacificiblue23 */

/* 

prompt per 
-nome completo
-colore
-età

"sommare" i log dei prompt e stampare in console e in html

*/

console.log('Hello, world!');

const userFirstName = prompt('type your first name'); 
console.log(userFirstName);

const userLastName = prompt('type your last name'); 
console.log(userLastName);

const userColor = prompt('type your favorite color'); 
console.log(userColor);

const userAge = prompt('type your Age'); 
console.log(Number(userAge));

const costante = prompt('type numbers'); 
console.log(Number(costante));

/* 
var somma = (Number(costante)) + (Number(userAge))
console.log(Number(somma));


var somma =  (Number(costante)) - (Number(userAge))
console.log(Number(somma));

var somma =  (Number(costante)) / (Number(userAge))
console.log(Number(somma));
*/

var somma = (Number(costante)) * (Number(userAge))
console.log(Number(somma)); 


document.getElementById('nome').innerHTML = 'ciao ' + userFirstName + userLastName + userColor + somma + '!';

console.log(userFirstName + userLastName + userColor + somma);