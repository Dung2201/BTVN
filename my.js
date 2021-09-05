//document.write('Xin chao VN'); x10 lan
/*for( let i=0; i<9;i++){
    document.write('Xin chao VN' );
    document.write("<br>")
}
*/
/*for(let i=1; i<=100;i++){
    document.write(i + "")
}
*/
/* 
for(bien_khoi_tao;dk_lap;khoi_lenh_thuc_thi_sau_moi_lan_lap){
    than_vong_lap
}

thu tu thuc hien vong lap
1:bien_khoi_tao
2:dk_lap
3:than_vong_lap
4:khoi_lenh_thuc_thi_sau_moi_lan_lap
quay tro lai b2

TH1:Khuyet bien khoi tao
let i=1;
for(; i<=100;i++){
    document.write(i + "")
}

TH2:Khuyet dk_lap
let i=1;
for(; ;i++){
    if(i>100){
        break;
    }
    document.write(i + "")
}
TH3:Khuyet cau lenh cuoi

let i=1;
for(; ;){
    if(i>100){
        break;
    }
    document.write(i + "")
    i++;
}
*/
//BT: tinh tong cac so chan tu 1-100
/*let sum=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        sum=sum+i;
    }
}
document.write(sum)
*/
/*BT:Viet chuong trinh in ra cac so tu 1-100
+ neu so do chia het cho 3 --> in ra fizz
+ neu so do chia het cho 5 --> in ra buzz
+ neu so do chia het cho 3 va 5 --> in ra fizzbuzz


for(i=1;i<=20;i++){
    if(i%15==0){
        document.write('fizzbuzz' +" ")
    }else if(i%5==0){
        document.write('buzz'+" ")
    } else if(i%3==0 ){
        document.write('fizz'+" ")
    }
    document.write(i +" "  )
}
*/
/*lưu ý
let sum=0;
for(let i=0;i<=10;i++){
    if(i==5){
        break;
    }
    sum=sum+i;
}
document.write(sum)
*/
//BT2: kt 1 so xem co phai la so nguyen to hay k
 var number=+prompt('Nhap vao 1 so')
if(number<2){
    alert( number +'khong la so nguyen to');
} else{
    let count=0;
    for (var i=2; i<=Math.sqrt(number);i++){
        if(number%i==0){
            count++;
        }
    }if (count==0){
        alert(number +' la so nguyen to');
    }else{
        alert(number +' khong la so nguyen to');
    }
}

/*
BTVN:
1.Viet chuong trinh lich cac ngay trong thang
2.Viet chuong trinh hien thi 30 so nguyen to dau tien
*/