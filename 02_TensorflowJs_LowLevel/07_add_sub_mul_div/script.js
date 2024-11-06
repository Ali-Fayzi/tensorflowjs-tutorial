let tensor1 = tf.tensor([1,2,3,4]);
let tensor2 = tf.tensor([5,6,7,8]);
tensor1.print();
tensor2.print();
// add
const result_add = tensor1.add(tensor2);
console.log(result_add.toString());

// sub
const result_sub = tensor1.sub(tensor2);
console.log(result_sub.toString());

// mul
const result_mul = tensor1.mul(tensor2);
console.log(result_mul.toString());

// div
const result_div = tensor1.div(tensor2);
console.log(result_div.toString());