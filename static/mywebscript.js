let validateAndRun = () => {
    let textToAnalyze = document.getElementById("textToAnalyze").value.trim();
    let errorMessage = document.getElementById("error-message");
    
    if (textToAnalyze === "") {
        errorMessage.style.display = "block";
        document.getElementById("system_response").innerHTML = "";
    } else {
        errorMessage.style.display = "none";
        RunSentimentAnalysis();
    }
}

let RunSentimentAnalysis = () => {
    let textToAnalyze = document.getElementById("textToAnalyze").value;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("system_response").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "sentimentAnalyzer?textToAnalyze"+"="+textToAnalyze, true);
    xhttp.send();
}
