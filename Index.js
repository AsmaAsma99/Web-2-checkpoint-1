const pets = [
   { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  


const getAge = (pet) => new Date().getFullYear() - pet.bornOn;
  

  let petsWithAge = [];
  pets.forEach(pet => {
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  })
  console.log(petsWithAge); 

 
 const dogs=pets.filter((dog)=> dog.type==="dog")
  console.log(dogs);

 
  let jasper = petsWithAge.filter(x => x.name==="Jasper")
  console.log(`Jasper is ${jasper[0].age} years old`)


