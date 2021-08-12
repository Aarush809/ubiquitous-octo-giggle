classifier=ml5.imageClassifier('MobileNet',ModelLoaded)

function ModelLoaded(){
    console.log(Model Loaded!)

}
check();
function check(){
    classifier.classify(img,gotResult)
}


function preload(){
    img=loadImage("bottle-water-12522351.jpg")
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("Object_Name").innerHTML= result[0].label;

    }
}