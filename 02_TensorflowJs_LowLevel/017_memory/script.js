

let sum = tf.tidy(()=>{
    let tensor_a = tf.tensor([1,2,3,4,5]);
    let tensor_b = tf.tensor([6,7,8,9,10]);

    let sum = tensor_a.add(tensor_b);
    return sum 
});

sum.print();
sum.dispose();
// tensor_a.dispose();
// tensor_b.dispose();
console.log(tf.memory().numTensors);
console.log(tf.memory().numBytes);
