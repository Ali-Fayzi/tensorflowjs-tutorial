// variable 

let tensor = tf.tensor([1,2,3,4]);
console.log(tensor);

const x = tf.variable(intialValue=tensor , trainable=false, name="x",dtype='float32');
console.log(x);

x.assign(tf.tensor([4,5,6,7]));
console.log(x.toString());