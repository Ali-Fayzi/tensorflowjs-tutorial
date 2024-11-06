// Scalar

let scalar = tf.scalar(99);
console.log(scalar.dataSync());
scalar.print();

// Vector
let vector = tf.tensor1d([1,2,3,4,5]);
console.log(vector);
console.log(vector.dataSync());
vector.print();

// Matrix
let matrix = tf.tensor2d([
    [1,2,3],
    [4,5,6]
]);
console.log(matrix);
console.log(matrix.dataSync());
matrix.print();

// Tensor
let tensor = tf.tensor([
    [[[1,2,3],
    [4,5,6]],
    [
        [1,2,3,4],
        [5,6,7,8]
    ]]
]);

console.log(tensor);
console.log(tensor.dataSync());
tensor.print();