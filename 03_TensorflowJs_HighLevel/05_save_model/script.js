tf.ready().then(()=>{

    console.log("TFJS READY!");

    // create data 
    let X = tf.randomUniformInt([10000,2] , 0 , 1000  );
    let y = X.sum(axis=1).reshape([10000,1]);
    X.print();
    y.print();

    // create model
    const model = tf.sequential();
    model.add(tf.layers.dense({units:1,inputShape:[2]}));
    model.summary();

    model.compile({
        optimizer:tf.train.adam(0.001),
        loss : 'meanSquaredError'
    });


    // model fit 

    model.fit(X,y,{
        epochs:50,
        batchSize:64,
        // validationSplit:0.2,
        callbacks:{
            onEpochEnd:(epoch,logs)=>{
                console.log(`epoch:${epoch} , loss:${logs.loss}`);
            }
        }
    }).then(()=>{
        // model.predict(tf.tensor2d([[1500,2000]])).print();
        // download
        model.save("downloads://my-model-1");
        // localstroage
        model.save("localstorage://my-model-1");
        // indexedDB
        model.save("indexeddb://my-model-1");
        // httpsever
        // model.save("http://ipserver/")
    });
});
