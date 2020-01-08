// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente (in html ul > li).
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.

var userName = prompt('Qual è il tuo cognome?');
console.log(userName);

var familyNameGroup = ['Nesta', 'Rui costa', 'Shevchenko', 'Baresi', 'Maldini', 'Ancelotti', 'Inzaghi', 'Gattuso', 'Van Basten', 'Tassotti', 'Savicevic', 'Baggio', 'Stam'];
console.log(familyNameGroup);

familyNameGroup.push(userName);
console.log(familyNameGroup);
familyNameGroup.sort();

var posizioneNome;

for (var i = 0; i < familyNameGroup.length; i++) {
  var formazioneGlorie = document.getElementById('formazione').innerHTML;
  document.getElementById('formazione').innerHTML = formazioneGlorie + '<li>' + familyNameGroup[i] + '</li>';
  if (familyNameGroup[i] == userName) {
    posizioneNome = i;
    console.log(posizioneNome + 1);
  }
}
document.getElementById('formazione').innerHTML = posizioneNome + 1;
// var userNamePosition = familyNameGroup.indexOf(userName) + 1;
// console.log(userNamePosition);
// var posizioneNome;
//
// for (var i = 0; i < familyNameGroup.length; i++) {
//   if (familyNameGroup[i] == userName) {
//     posizioneNome = i;
//     console.log(posizioneNome + 1);
//   }
// }
