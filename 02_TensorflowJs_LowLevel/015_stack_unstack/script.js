// Stack
let a = tf.tensor([1,2,3]);
let b = tf.tensor([4,5,6]);
let c = tf.tensor([7,8,9]);

a.print();
b.print();
c.print();

let s = tf.stack([a,b,c],axis=1);
s.print();
// Unstack
console.log(tf.unstack(s));
tf.unstack(s).forEach(tensor => tensor.print());