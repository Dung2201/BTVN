function checkanswer() {
    let answer = document.getElementById('A');
    let answer1 = document.getElementById('B');
    let answer2 = document.getElementById('C');
    let answer3 = document.getElementById('D');
    let message = '';
    if(answer.checked==true){
        message= 'Dap an dung la C'
    }else if(answer1.checked==true){
        message= 'Dap an dung la C'
    }else if(answer2.checked==true){
        message= 'Day la dap an dung'
    }else if(answer3.checked==true){
        message= 'Dap an dung la C'
    }
    console.log(message);
    document.getElementById("result").innerHTML = message;
}