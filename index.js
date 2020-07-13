document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    const threshold = 0.8;

    const text = document.getElementById('text');
    let string = "";

    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, (selection) => {

        toxicity.load(threshold).then(model => {

            model.classify(selection).then(predictions => {
                predictions.forEach(prediction =>{
                    string += prediction.label + "..................";
                    string += prediction.results[0].match + "<br>";
                    document.getElementById("text").innerHTML = string;
                })



            });
        });
    });

})
