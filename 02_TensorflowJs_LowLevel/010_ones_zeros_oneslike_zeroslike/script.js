// ones
let ones = tf.ones(shape=[100,100]);
console.log(ones);
ones.print();
// zeros
let zeros = tf.zeros(shape=[50,50]);
console.log(zeros);
zeros.print();

// oneslike
const x = tf.tensor([1,2]);
console.log(x);
x.print();
tf.onesLike(x).print();
// zerosLike
const y = tf.tensor([
    [1,2],
    [3,4]
]);
y.print();
tf.zerosLike(y).print();