// functions

function message(msg="TensorflowJS"){
    // console.log(msg);
    return msg + ", Bye";
}

new_msg = message();
console.log(new_msg);

// Anonymous Functions

let msg = function(name){
    console.log("Hello ,",name);
}
msg("Ali");

// Arrow Functions

let greet = (name) => {
    console.log("How are you ,",name,"?")
}

greet("Reza");

let greet2 = name => "How are you ," + name + "?" ;

let msg_2 = greet2("Mostafa");
console.log(msg_2);

// 

(function(){
    console.log("This function run immediately!");
})();