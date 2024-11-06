tf.ready().then(()=>{
   
    // load downloaded model
    // tf.loadLayersModel("http://127.0.0.1:5500/my_model/my-model-1.json").then((model)=>{

    //     model.predict(tf.tensor2d([[5000,7000]])).print();
    // });
    // load model from localstroage
    // tf.loadLayersModel("localstorage://my-model-1").then((model)=>{
    //     model.predict(tf.tensor2d([[5000,7000]])).print();
    // });
    // load model from indexeddb
    tf.loadLayersModel("indexeddb://my-model-1").then((model)=>{
        model.predict(tf.tensor2d([[5000,7000]])).print();
    });
});