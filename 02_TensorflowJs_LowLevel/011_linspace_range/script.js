// linspace
let start = 0;
let stop = 100;
let num = 100;

const output = tf.linspace(start,stop,num);
console.log(output.dataSync());

// range
let range_start = 0;
let range_stop = 100;
let step = 2;

const output_range = tf.range(range_start,range_stop,step);
console.log(output_range.dataSync());