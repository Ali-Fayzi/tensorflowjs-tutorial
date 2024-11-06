tf.ready().then(async () => {

    tf.setBackend("wasm");

    async function loadModel(){
        return await tf.loadGraphModel("./models/model.json");
    }

    let model = await loadModel();
    

    let img = document.getElementById("img");
    
    let originalImage = tf.browser.fromPixels(img);
    
    originalImage = originalImage.resizeNearestNeighbor([320,320]).toFloat().div(tf.scalar(255.0));

    let tensor = originalImage.sub(tf.scalar(0.485)).div(tf.scalar(0.229)).transpose([2,0,1]).expandDims(0);


    let predictions = model.predict(tensor);
    
    
    let segmentationMask = tf.squeeze(predictions[1]);

    segmentationMask = segmentationMask.greater(0.5).toFloat();
    let canvas_mask = document.getElementById("mask");
    let output = document.getElementById("output");

    tf.browser.toPixels(segmentationMask,canvas_mask);


    let maskRGB = tf.stack([segmentationMask,segmentationMask,segmentationMask],-1).toFloat();

    console.log(maskRGB.shape)

    let segmentedOutput = originalImage.mul(maskRGB);

    // tf.browser.toPixels(segmentedOutput,output);


    let alphaChannel = segmentationMask.toFloat();
    let segmentedOutputWithAlpha = tf.concat([segmentedOutput,alphaChannel.expandDims(-1)],-1);
    tf.browser.toPixels(segmentedOutputWithAlpha,output);



});