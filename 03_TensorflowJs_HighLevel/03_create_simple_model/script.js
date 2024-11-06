tf.ready().then(()=>{


    const X = tf.tensor2d([
        [1,2] , [3,4] , [5,6] , [7,8] , [4,2] , [9,1]
    ]);
    const y = tf.tensor2d([
        [3] , [7] , [11] , [15] , [6] , [10]
    ]);



    const model = tf.sequential();
    model.add(tf.layers.dense({units:1 , inputShape:[2]}));
    model.summary();

    model.compile({
        optimizer:'sgd',
        loss : 'meanSquaredError'
    });

    model.fit(X,y,{epochs:50}).then(()=>{
        let test_tensor = tf.tensor2d([
            [9,10] , [1,2]
        ]);

        model.predict(test_tensor).print();
    });


});