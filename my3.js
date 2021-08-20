function setInput(value){
    document.getElementById('input').value+=value;
}
function result(){
    let number = document.getElementById('input').value;
    let res = eval(number);
    document.getElementById("input").value =res;
}

function ClearInput(){
    document.getElementById('input').value='';
}