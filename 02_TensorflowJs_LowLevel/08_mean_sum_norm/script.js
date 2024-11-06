// mean
const tensor = tf.tensor([[1,2],[3,4]]);
let vector = tf.tensor([1,2,3,4,5,6,7,8,9]);
vector.print();
tensor.print();
tensor.mean().print();

// sum

let tensor_1 = tf.tensor([[1,2],[3,4]]);
tensor.sum().print();
vector.sum().print();

// norm 

vector.norm().print();