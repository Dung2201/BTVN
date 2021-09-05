let month=+prompt('nhap so thang can tinh ngay');
if( Number.isInteger(month)){
    if(0<month  && month<=12){
       if(month==1 || month==3 || month==5 || month==7||month==8 || month==10||month==12){
        alert('thang nay co 31 ngay');
       }else if(month==4 || month==6 || month==9 || month==11){
        alert('thang nay co 30 ngay');
       }else{
        alert('thang nay co 28 ngay');
       }
    　}else{
        alert('Vui long nhao thang nho hon 12');
    }
}else {    
     alert('khong ton tai thang nay') 
    }
