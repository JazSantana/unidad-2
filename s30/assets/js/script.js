let person = {
    name: "Marina" ,
    edad: 15 ,
    cellphone: "903292342" ,
    apellido: "Santana" ,
};
console.log(person);
console.log(person.name)
console.log(person["edad"])
console.log(person.cellphone)
person.hobbies = ["Jugar volery", "Leer ñlibros", "Ver series"
];
person.apellido = "Cuzcano";
person.name = "Mar" ;
console.log(person) ;
console.log(person["hobbies"]);
console.log(person.apellido);
/*Destructuracion*/
let person2 = { ...person};
person2.name = "Jazmin";
person2.cellphone = "123435689";
//persona2
console.log(person2);
//persona1
console.log(person);
//PRACTICA
let heroes = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
      {
        "name": "Molecule Man",
        "age": 29,
        "secretIdentity": "Dan Jukes",
        "powers": [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name": "Madame Uppercut",
        "age": 39,
        "secretIdentity": "Jane Wilson",
        "powers": [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name": "Eternal Flame",
        "age": 1000000,
        "secretIdentity": "Unknown",
        "powers": [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }
  console.log(heroes.members);
  console.log(heroes.members[1].name);
  console.log(heroes.members[1].powers[2]);
  console.log(heroes.members[2].powers[4]);