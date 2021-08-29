function switchGood() {
    var isGood=document.getElementById("good").checked;
    var isCheap=document.getElementById("cheap").checked;
    var isFast=document.getElementById("fast").checked;
    console.log(isGood,isCheap,isFast);

    if(isCheap && isFast){
        if(Math.random() < 0.5){
            document.getElementById("cheap").checked=false;
        }else{
            document.getElementById("fast").checked=false;
        }
    }
}

function switchCheap() {
    var isGood=document.getElementById("good").checked;
    var isCheap=document.getElementById("cheap").checked;
    var isFast=document.getElementById("fast").checked;
    console.log(isGood,isCheap,isFast);

    if(isGood && isFast){
        if(Math.random() < 0.5){
            document.getElementById("good").checked=false;
        }else{
            document.getElementById("fast").checked=false;
        }
    }
}

function switchFast() {
    var isGood=document.getElementById("good").checked;
    var isCheap=document.getElementById("cheap").checked;
    var isFast=document.getElementById("fast").checked;
    console.log(isGood,isCheap,isFast);

    if(isGood && isCheap){
        if(Math.random() < 0.5){
            document.getElementById("cheap").checked=false;
        }else{
            document.getElementById("fast").checked=false;
        }
    }
}