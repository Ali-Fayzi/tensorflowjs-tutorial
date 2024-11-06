let tensor = tf.tensor(values=[1,2,3,4],shape=[1,4],dtype='int32');
console.log(tensor);
tensor.print();
// console.log(tensor.toString());
// DataType
console.log(tensor.dtype);
// Rank
console.log(tensor.rank);
// Shape
console.log(tensor.shape);
// Size
console.log(tensor.size);