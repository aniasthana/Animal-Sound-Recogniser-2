function startClassification () {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.imageClassifier('://teachablemachine.withgoogle.com/models/0-9oGOrfG/model.json',modelLoaded);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults () {
    console.log('Got Result');
}