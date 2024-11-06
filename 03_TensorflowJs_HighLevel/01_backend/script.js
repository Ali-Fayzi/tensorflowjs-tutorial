console.log("Backend");
// tf.ready().then();
tf.ready().then(()=>{
    console.log(tf.getBackend());
    // cpu
    tf.setBackend("cpu");
    console.log(tf.getBackend());
    // wasm
    tf.setBackend("wasm");
    console.log(tf.getBackend());
});