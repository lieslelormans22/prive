/*
🖤 JavaScript Cheat Sheet
1. Variabelen maken
Een variabele gebruik je om informatie op te slaan.

let naam = "Liesle";
let leeftijd = 24;
let isStudent = true;



Type	Betekenis	Voorbeeld
string	Tekst	"Gengar"
number	Getal	24
boolean	Waar of onwaar	true of false
- let = maakt een variabele waarvan de waarde kan veranderen.
- const = maakt een variabele die je niet opnieuw kunt toewijzen.
2. Arrays maken
Een array is een lijst met meerdere waarden.

let pokemon = ["Gengar", "Umbreon", "Pikachu"];



Je gebruikt vierkante haken [] om een array te maken.
3. Een element opvragen
Belangrijk: indexen beginnen bij 0, niet bij 1.

let pokemon = ["Gengar", "Umbreon", "Pikachu"];

console.log(pokemon[0]); // Gengar
console.log(pokemon[1]); // Umbreon
console.log(pokemon[2]); // Pikachu



Index	Element
0	Gengar
1	Umbreon
2	Pikachu
4. Een element vervangen
Gebruik de index van het element dat je wilt veranderen.

let pokemon = ["Gengar", "Umbreon", "Pikachu"];

pokemon[2] = "Mimikyu";

console.log(pokemon[2]); // Mimikyu



Je vervangt Pikachu door Mimikyu. De array blijft even lang.
5. De lengte van een array
Gebruik .length om te tellen hoeveel elementen erin zitten.

let pokemon = ["Gengar", "Umbreon", "Pikachu"];

console.log(pokemon.length); // 3



Onthoud: .length telt de elementen, niet de indexen.
6. Een element toevoegen
Gebruik .push() om iets achteraan toe te voegen.

let pokemon = ["Gengar", "Umbreon"];

pokemon.push("Mimikyu");

console.log(pokemon);
// ["Gengar", "Umbreon", "Mimikyu"]



De lengte verandert van 2 naar 3.
7. Een element verwijderen
Gebruik .splice() om elementen uit een array te verwijderen.

let pokemon = ["Gengar", "Umbreon", "Pikachu"];

pokemon.splice(1, 1);

console.log(pokemon);
// ["Gengar", "Pikachu"]



splice(1, 1) betekent:
- Eerste getal 1: begin bij index 1.
- Tweede getal 1: verwijder 1 element.
8. Iets tonen in de console
Gebruik console.log() om een waarde te bekijken.

let naam = "Liesle";

console.log(naam);



Verwachte uitvoer:
Liesle



💡 De belangrijkste commando's in één overzicht
Code	Wat doet het?
let naam = "Liesle";	Maakt een variabele
pokemon[0]	Vraagt het eerste element op
pokemon[1] = "Mimikyu";	Vervangt een element
pokemon.length	Telt de elementen
pokemon.push("Eevee");	Voegt een element toe
pokemon.splice(1, 1);	Verwijdert één element vanaf index 1
console.log(pokemon);	Toont de array in de console


*/