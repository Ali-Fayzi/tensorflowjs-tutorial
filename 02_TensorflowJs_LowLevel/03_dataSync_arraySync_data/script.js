let tensor = tf.tensor([
    [[1,2,3],
    [4,5,6]],
    [[1,2,3],
    [4,5,6]],
]);

tensor.print();

console.log(tensor);

// dataSync,arraySync
console.log(tensor.dataSync());
console.log(tensor.arraySync());
// data,array
tensor.data().then(data=>{
    console.log(data);
});
tensor.array().then(data=>{
    console.log(data);
});