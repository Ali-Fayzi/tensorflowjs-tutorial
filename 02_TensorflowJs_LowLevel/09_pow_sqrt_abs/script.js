// pow
let tensor1 = tf.tensor([4,9,16]);
tensor1.print();
tensor1.pow(tf.scalar(0.5)).print();

// sqrt 
let tensor2 = tf.tensor([4,9,16]);
tensor2.print();
tensor2.sqrt().print();

// abs

let tensor3 = tf.tensor([-1,-2,-3,-4]);
tensor3.print();
tensor3.abs().print();