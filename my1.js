function doi_nam_am_lich(){
    let birthday= document.getElementById('birthday').value;
    let date= new Date(birthday);
    let year=date.getFullYear();

    //tinh Can:
    let can=year%10;
    let message='';
    if(can==0){
        message='Canh'
    }else if(can==1){
        message='Tân'
    }else if(can==2){
        message='Nhâm'
    }else if(can==3){
        message='Quý'
    }else if(can==4){
        message='Giáp'
    }else if(can==5){
        message='Ất'
    }else if(can==6){
        message='Bính'
    }else if(can==7){
        message='Đinh'
    }else if(can==8){
        message='Mậu'
    }else if(can==9){
        message='Kỷ'
    }





    //tinh Chi 
    let Chi=year%12;
    if(Chi==0){
        message += 'Thân'
    }else if(Chi==1){
        message += 'Dậu'
    }else if(Chi==2){
        message += 'Tuất'
    }
    else if(Chi==3){
        message += 'Hợi'
    }else if(Chi==4){
        message += 'Tý'
    }else if(Chi==5){
        message += 'Sửu'
    }else if(Chi==6){
        message += 'Dần'
    }else if(Chi==7){
        message += 'Mẹo'
    }else if(Chi==8){
        message += 'Thìn'
    }else if(Chi==9){
        message += 'Tỵ'
    }else if(Chi==10){
        message += 'Ngọ'
    }else if(Chi==11){
        message += 'Mùi'
    }

    document.getElementById('result').innerHTML=message
}