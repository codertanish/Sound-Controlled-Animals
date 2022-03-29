cat = 0;
dog= 0;
lion = 0;
cow = 0;

img = document.getElementById("img_tag");

function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LHx3HrpNm/model.json", modelReady);

}

function modelReady() {
    classifier.classify(gotResults);   
}


function gotResults(error, results) {
    console.log("Got Results")
    if(error) {
        console.error;
    }

    else {
        console.log(results);

        r = Math.floor(Math.random()*255) + 1;
        g = Math.floor(Math.random()*255) + 1;
        b = Math.floor(Math.random()*255) + 1;

        document.getElementById("number_detected").innerHTML = "Detected Cat: " + cat + " Detected Dog: " + dog + " Detected Lion: " + lion + " Detected Cow: " + cow;
        document.getElementById("sound_detected").innerHTML = "Detected Sound: " + results[0].label;
        
        document.getElementById("number_detected").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("sound_detected").style.color = "rgb(" + r + "," + g + "," + b + ")";




        if(results[0].label == "Meowing") {
            img.src = "cat_meowing.gif";
            cat++;
        }

        else if(results[0].label == "Barking") {
            img.src = "dog_barking.gif"
            dog++;
        }

        else if(results[0].label == "Mooing") {
            img.src = "cow_mooing.gif"
            cow++;
        }

        else if(results[0].label == "Roaring") {
            img.src = "lion_roaring.gif"
            lion++;
        }

        else{
            img.src = "Ear_icon.png"
        }
    }
}