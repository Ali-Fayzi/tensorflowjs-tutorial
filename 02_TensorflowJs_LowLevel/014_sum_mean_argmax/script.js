// Sum

const tensor = tf.tensor([
    [1,2,3,4],
    [5,6,7,8]
]);

tensor.sum().print();
// column
tensor.sum(axis=0).print();
// row
tensor.sum(axis=1).print();

// Mean
tensor.mean().print();
// column
tensor.mean(axis=0).print();
// row
tensor.mean(axis=1).print();

// ArgMax

const v1 = tf.tensor([55,18,156,6684,161,8]);
v1.print();
v1.argMax().print();