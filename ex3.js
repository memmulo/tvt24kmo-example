//assosiatiivinen array on array, jossa kentät on nimetty
const bookData=[
    {'name' :"C++", 'author' :"Jim Smith"},
    {'name' :"Java", 'author' :"Lisa Jones"},
    {'name' :"MySQL", 'author' :"Bob Danieles"}
];

//tulostetaan koko array
console.log("koko array:");
console.log(bookData);
//tulostetaan toien rivi
console.log("toinen rivi");
console.log(bookData[1]);
//tulostetaan ensimmäinen nimi
console.log("ensimmäinen nimi:");
console.log(bookData[0]["name"]);
//tulostetaan ensimmäinen author
console.log("ensimmäinen author:");
console.log(bookData[0]["author"]);