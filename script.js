const pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  getAge =( pet => new Date().getFullYear() - pet.bornOn )
  
  // var petsWithAge = [];
  // for (var i = 0; i < pets.length; i++) {
  //   var pet = pets[i];
  //   pet.age = getAge(pet);
  
  //   petsWithAge.push(pet);
  // }
  // console.log(petsWithAge);


let petsWithAge=[];
pets.map(animal=>{
  const pet=animal;
  pet.age=getAge(pet);
  petsWithAge.push(pet)
})
console.log(petsWithAge);
 
  
  // var dogs = [];
  // for (var i = 0; i < pets.length; i++) {
  //   var pet = pets[i];
  //   if (pet.type === "dog") {
  //     dogs.push(pet);
  //   }
  // }

  const dogs=pets.filter(animal=>{ return animal.type=="dog" })

  console.log(dogs)
  
  
  
  // var jasper;
  // for (var i = 0; i < pets.length; i++) {
  //   var pet = pets[i];
  //   if (pet.name === "Jasper") {
  //     jasper = pet;
  //   }
  // }


  let age;
 jasper= pets.filter(a=>{ if( a.name=="Jasper"){
   age=a.age;
   return a;
 }
 
})

console.log(jasper)
console.log(`Jasper is ${age} years old`);