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
function Del(){
    let output=document.getElementById('input').value;
    let newoutput=output.slice(0,-1);
    document.getElementById('input').value=newoutput;
}