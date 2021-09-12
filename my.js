/*
-vong while
while(dk){
    //than vong lap
}

dk->true->thuc hien vong lap
dk->false-> ket thuc vong lap
-su dung khi k biet truoc so lan lap

-vong lap do_while
do{
    //than vong lap
}while(dk){
    //than vong lap
}
*/

/*
let i=0;
while(i<10){
    console.log(i);
    i++;
    document.write(i);
    
}

BT:Viet chuong trinh tinh tong cac so nhap vao tu ban phim
khi so nhap vao là -1 thi ket thuc vong lap va in ra tong
*/
/*
let a = 0;
let sum=0;
while(a!=parseInt(-1)){
    sum += a;
    a=+prompt("Nhap so tu ban phim")
}
alert(sum)
*/
/*
BT2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.

let a = +prompt("Nhiet do hien tai la:")
while (a <= 20 || a >= 100) {
    if (a <= 20) {
        alert('Vui long tang nhiet do')
        a = +prompt("Nhap lai nhiet do dieu chinh:")
    } else {
        alert('Vui long giam nhiet do')
        a = +prompt("Nhap lai nhiet do dieu chinh:")
    }
}
alert('Day la nhiet do thich hop')
*/
/*
BTVN: Tinh lai suat ngan hang (lai me de lai con)khi biet so tien ban dau
so thang cho vay va lai hang thang
VD:10.000.000, lai suat=0.5%/thang , tien vay:3 thang ;
T1 = 10.000.000 +10.000.000*0.5
T2 = T1+ T1*0.5
T3 = T2 +T2*0.5
*/