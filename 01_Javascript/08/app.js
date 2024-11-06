// Objects

let person = {
    name : "Ali",
    family : "Fayzi",
    age : 26,
    city:"Tehran",
    getFullName : function(){
        console.log(this.name , this.family);
    },
    getCityName(){
        return this.city;
    }
};

console.log(person);

console.log(person.name , person.age , person.city);

console.log(person["name"] , person["age"] , person["city"]);

person.email = "ali@gmail.com";

console.log(person);
console.log("email" in person);

delete person.email;
console.log(person);
console.log("email" in person);
console.log(person["family"]);


for(let key in person){
    console.log(key + "=" , person[key]);
}

person.getFullName();
console.log(person.getCityName());