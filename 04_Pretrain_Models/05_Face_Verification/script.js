tf.ready().then(async () => {

    const embedding_threshold = 0.45;
    tf.setBackend("wasm");

    async function loadModel(){
        return await tf.loadLayersModel("./models/model.json");
    }

    function processImg(img,tarSize){
        img = img.toFloat();
        img = img.resizeBilinear(tarSize);
        img = img.expandDims(0);
        img = img.div(tf.scalar(255.0));
        return img;
    }

    function cosineDistance(emb1 , emb2){
        emb1 = tf.div(emb1,emb1.norm());
        emb2 = tf.div(emb2,emb2.norm());

        return tf.losses.cosineDistance(emb1,emb2);

    }
    let model = await loadModel();
    console.log(model);

    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");


    let tensor1 = tf.browser.fromPixels(img1);
    let tensor2 = tf.browser.fromPixels(img2);
    let tensor3 = tf.browser.fromPixels(img3);


    let img_tensor1 = processImg(tensor1,[112,112]);
    let img_tensor2 = processImg(tensor2,[112,112]);
    let img_tensor3 = processImg(tensor3,[112,112]);

    let embedding1 = model.predict(img_tensor1);
    let embedding2 = model.predict(img_tensor2);
    let embedding3 = model.predict(img_tensor3);
    console.log(embedding1.shape);
    console.log(embedding2.shape);
    console.log(embedding3.shape);

    let dis1 = cosineDistance(embedding1, embedding2);
    let dis2 = cosineDistance(embedding1,embedding3);


    let result1 = dis1.arraySync() <= embedding_threshold;
    let result2 = dis2.arraySync() <= embedding_threshold;

    document.getElementById("res1").innerText = `${result1}`;
    document.getElementById("res2").innerText = `${result2}`;


});

