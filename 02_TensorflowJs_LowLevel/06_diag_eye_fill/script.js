// diag

const x = tf.tensor1d([1,2,3,4]);
x.print();
tf.diag(x).print();

// eye
tf.eye(numRows=4,numColumns=4).print();

// fill
tf.fill([2,2],99).print();

let a = tf.fill([5,5],0);
console.log(a.toString());