let tensor = tf.tensor(values=[1,2,3,4,5,6,7,8,9],shape=[9],dtype='int32');
console.log(tensor.toString());
console.log(tensor);
// clone

let tensor2 = tensor.clone()

console.log(tensor2.toString());
console.log(tensor2);