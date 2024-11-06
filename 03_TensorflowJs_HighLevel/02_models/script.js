console.log("Models");


// tf.sequential

const model_1 = tf.sequential();
model_1.add(tf.layers.dense({units:32 , inputShape:[50]}));
model_1.add(tf.layers.dense({units:2 , activation:'softmax'}));
model_1.summary();

const model_2 = tf.sequential({
    layers: [ 
        tf.layers.dense({units:32 , inputShape:[50]}),
        tf.layers.dense({units:2 , activation:'softmax'})
    ]
});
model_2.summary();

const input_1 = tf.zeros([2,50]);
input_1.print();
model_1.predict(input_1).print();
model_2.predict(input_1).print();
// tf.model
// input shape
const input = tf.input({shape:[5]});
// layer1
const denseLayer1 = tf.layers.dense({units:10 , activation:'relu'});
// layer2
const denseLayer2 = tf.layers.dense({units:2 , activation:'softmax'});
const output = denseLayer2.apply(denseLayer1.apply(input));
const model_3 = tf.model({inputs:input , outputs:output});
model_3.summary();
// tf.ones()

let input_2 = tf.ones([2,5]);
input_2.print();
model_3.predict(input_2).print();