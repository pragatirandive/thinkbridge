//creating object
let users = {
    name:"Pragati",
    id:27,
    age:25,
    occupation:"Computer engineering"
}
console.log(users);

//access properties from object
console.log(users.name);
console.log(users.id);
console.log(users.occupation);

//adding property in objects

users.city = "Pune";
users.classNum = 100;

console.log(users);

//deleting properties

delete users.classNum;

console.log(users);

//iterating
for (const key in users) {
   console.log(key);
}

//keys
Object.keys(users).forEach( key => console.log(key));

//values
Object.values(users).forEach(values => 
    console.log(values)
);

//key and value
Object.entries(users).forEach( ([keys,values]) =>
    console.log(keys ,":",values)
);

//neated objects
const student = {
  name: "Pragati",
  marks: {
    math: 95,
    physics: 88
  }
};

console.log(student.marks.math); // 95

// Iterate nested object
for (let subject in student.marks) {
  console.log(subject, ":", student.marks[subject]);
}
