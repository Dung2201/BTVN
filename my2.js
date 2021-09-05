function xemtuoi(){
    let birthdayBoy= document.getElementById("birthday_boy").value;
    let date_boy= new Date(birthdayBoy);
    let year_boy=date_boy.getFullYear();


    //tinh Can:
    var canboy=year_boy%10;
    let message1='';
    if(canboy==0){
        message1='Canh'
    }else if(canboy==1){
        message1='Tân'
    }else if(canboy==2){
        message1='Nhâm'
    }else if(canboy==3){
        message1='Quý'
    }else if(canboy==4){
        message1='Giáp'
    }else if(canboy==5){
        message1='Ất'
    }else if(canboy==6){
        message1='Bính'
    }else if(canboy==7){
        message1='Đinh'
    }else if(canboy==8){
        message1='Mậu'
    }else if(canboy==9){
        message1='Kỷ'
    }


    //tinh Chi 
    let chiboy=year_boy%12;
    if(chiboy==0){
        message1 += 'Thân'
    }else if(chiboy==1){
        message1 += 'Dậu'
    }else if(chiboy==2){
        message1 += 'Tuất'
    }
    else if(chiboy==3){
        message1 += 'Hợi'
    }else if(chiboy==4){
        message1 += 'Tý'
    }else if(chiboy==5){
        message1 += 'Sửu'
    }else if(chiboy==6){
        message1 += 'Dần'
    }else if(chiboy==7){
        message1 += 'Mẹo'
    }else if(chiboy==8){
        message1 += 'Thìn'
    }else if(chiboy==9){
        message1 += 'Tỵ'
    }else if(chiboy==10){
        message1 += 'Ngọ'
    }else if(chiboy==11){
        message1 += 'Mùi'
    }

    let birthdayGirl= document.getElementById("birthday_girl").value;
    let date_girl=new Date(birthdayGirl)
    let year_girl=date_girl.getFullYear();
 

    //tinh Can:
    let cangirl=year_girl%10;
    let message2='';
    if(cangirl==0){
        message2='Canh'
    }else if(cangirl==1){
        message2='Tân'
    }else if(cangirl==2){
        message2='Nhâm'
    }else if(cangirl==3){
        message2='Quý'
    }else if(cangirl==4){
        message2='Giáp'
    }else if(cangirl==5){
        message2='Ất'
    }else if(cangirl==6){
        message2='Bính'
    }else if(cangirl==7){
        message2='Đinh'
    }else if(cangirl==8){
        message2='Mậu'
    }else if(cangirl==9){
        message2='Kỷ'
    }


    //tinh Chi 
    let chigirl=year_girl%12;
    if(chigirl==0){
        message2 += 'Thân'
    }else if(chigirl==1){
        message2 += 'Dậu'
    }else if(chigirl==2){
        message2 += 'Tuất'
    }
    else if(chigirl==3){
        message2 += 'Hợi'
    }else if(chigirl==4){
        message2 += 'Tý'
    }else if(chigirl==5){
        message2 += 'Sửu'
    }else if(chigirl==6){
        message2 += 'Dần'
    }else if(chigirl==7){
        message2 += 'Mẹo'
    }else if(chigirl==8){
        message2 += 'Thìn'
    }else if(chigirl==9){
        message2 += 'Tỵ'
    }else if(chigirl==10){
        message2 += 'Ngọ'
    }else if(chigirl==11){
        message2 += 'Mùi'
    }
    
    var message3 ='';
  
    if(Math.abs(chiboy-chigirl)== 6){
        message3='Khong phu hop';
    }else if(Math.abs(chiboy-chigirl)==4){
        message3='Rat phu hop';
    }else{
        message3='Binh thuong';
    }
    document.getElementById('result1').innerHTML=message1;
    document.getElementById('result2').innerHTML=message2;
    document.getElementById('result3').innerHTML=message3;
}

