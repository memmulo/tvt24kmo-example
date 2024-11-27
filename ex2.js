//callback esimerkki
setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

//usein callback funtiot kirjoitetaan ns. anonyymeinä,
//eli ilman nimeä
setTimeout(function(){
    console.log("Demonstrating the callbacks");
},2000);

console.log("The application is started");

//voidaan käyttää yös ns. nuolifunktiota
setTimeout(() => {
    console.log("Demonstrating the callbacks");
},2000);

console.log("The application is started");