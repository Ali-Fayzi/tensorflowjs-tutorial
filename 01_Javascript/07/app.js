let names = ["Ali","Reza","Mohammad","Ahmad"];

console.log(names);
console.log(names.length);

names.push("Nima");
console.log(names);
console.log(names.length);
names.pop();
console.log(names);
console.log(names.length);

console.log(names[0]);
for (let i = 0 ; i < names.length; i++){
    console.log("Name[",i,"]=",names[i]);
}

for (let name of names){
    console.log(name);
}

let index = names.indexOf("Ali");
names[index] = "AliReza";
console.log(names);
console.log(names.length);

// map

let numbers = [1,2,3,4];

let squares = numbers.map( num => num * num );
console.log(squares);

// filter 

new_numbers = numbers.filter( num => num <= 3)
console.log(new_numbers);