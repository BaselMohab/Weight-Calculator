const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");


let errorTime;
let resultTime;

function getResults() {
    if (inputEl.value <=0 || isNaN(inputEl.value)) {
        errorEl.innerText = "Please Enter A Valid Number"
        clearTimeout(errorTime);
        errorTime = setTimeout(()=> {
            errorEl.innerText=""
            inputEl.value = ""
        },2000)
    }else {
        resultEl.innerText = (inputEl.value / 2.2).toFixed(2);
        clearTimeout(resultTime);
        eresultTime = setTimeout(()=> {
            resultEl.innerText=""
            inputEl.value = ""
        },8000)
    }
}







inputEl.addEventListener("input", getResults)