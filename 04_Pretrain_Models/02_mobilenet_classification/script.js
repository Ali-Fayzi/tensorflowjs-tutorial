async function predict(){
    // load model
    const model = await tf.loadLayersModel("http://127.0.0.1:5500/models/model.json");
    console.log(model);

    // load img

    let img = document.getElementById("img");
    
    let tensor = tf.browser.fromPixels(img);

    let offset = tf.scalar(127.5);
    tensor = tensor
            .resizeNearestNeighbor([224,224])
            .toFloat()
            .sub(offset)
            .div(offset)
            .expandDims();
    

    let predictions = await model.predict(tensor).data();
    
    let results = Array.from(predictions).map(function (p,i){
        return {
            prob: p,
            className: IMAGENET_CLASSES[i]
        }
    }).sort(function(a,b){
        return b.prob - a.prob;
    }).slice(0,3);

    console.log(results);
}


predict();