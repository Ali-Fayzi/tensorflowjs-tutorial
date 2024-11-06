// reshape
const tensor = tf.tensor(values=[1,2,3,4,5,6],shape=[2,3]);
console.log(tensor.toString());
console.log(tensor);
console.log(tensor.reshape([3,2]));
console.log(tensor.reshape([3,2]).toString());

// expandDims
const tensor2 = tf.tensor(value=[1,2,3,4],shape=[2,2]);
console.log(tensor2);
console.log(tensor2.toString());
const expandedTensor = tensor2.expandDims(0);
console.log(expandedTensor);
console.log(expandedTensor.toString());

// squeeze
const squeezedTensor = expandedTensor.squeeze();
console.log(squeezedTensor);
console.log(squeezedTensor.toString());

// slice
let tensor3 = tf.tensor([
    [1,2,3,4],
    [5,6,7,8]
]);
console.log(tensor3);
console.log(tensor3.toString());

const slice_ = tensor3.slice([0,1],[2,3]);
console.log(slice_);
console.log(slice_.toString());

// concat
let tensor_1 = tf.tensor([1,2,3,4]);
let tensor_2 = tf.tensor([5,6,7,8]);

const concatenatedTensor = tf.concat([tensor_1,tensor_2]);
tensor_1.print();
tensor_2.print();
concatenatedTensor.print();

// 2d
let mat1 = tf.tensor([
    [1,2],
    [3,4]
]);
let mat2 = tf.tensor([
    [5,6],
    [7,8]
]);
mat1.print();
mat2.print();

let concatenatedMatrix = tf.concat([mat1,mat2],axis=1);
console.log(concatenatedMatrix.shape);
concatenatedMatrix.print();

// tile

const t = tf.tensor([[1,2]]);
t.print();
t.tile([4,4]).print();