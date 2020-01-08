// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente (in html ul > li).
// Scrivi anche la posizione della lista in cui il nuovo utente si trova.

var userName = prompt('Qual è il tuo cognome?');
console.log(userName);

var familyNameGroup = ['Nesta', 'Rui costa', 'Shevchenko', 'Baresi', 'Maldini', 'Ancelotti', 'Inzaghi', 'Gattuso'];
console.log(familyNameGroup);


familyNameGroup.push(userName);
console.log(familyNameGroup);
