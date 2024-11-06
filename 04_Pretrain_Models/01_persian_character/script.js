tf.ready().then( async ()=>{


    const model = await tf.loadLayersModel("http://127.0.0.1:5501/model/model.json");
    const img = document.querySelector("#img");
    let image = tf.browser.fromPixels(img).resizeBilinear([32,32]).div(tf.scalar(255.0));
    image = tf.expandDims(image,0);
    let result = model.predict(image);
    let output = {
        0:'الف',
        1:'ب',
        2:'د',
        3:'ج',
    }
    let index = tf.argMax(result.dataSync()).dataSync()[0];
    console.log(output[index]);
});