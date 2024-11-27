//luodaan objekti
const person={
    explanation: 'Persons',
    personData:[
        {'fn' :"Jim", 'ln' :"Smith"},
        {'fn' :"Lisa", 'ln' :"Smith"},
        {'fn' :"Ann", 'ln' :"Jones"},
    ],
    showData: function(){
        console.log(this.explanation);
        console.log(this.personData);
    },
    isertData: function(addFn, addLn){
        this.personData.push({fn:addFn, ln:addLn});
    }
};
console.log("Aluksi personData");
person.showData();
console.log("Lisätään Teppo:");
person.isertData('Teppo','Testi');
person.showData();