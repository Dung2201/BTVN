/*
BTVN: Tinh lai suat ngan hang (lai me de lai con)khi biet so tien ban dau
so thang cho vay va lai hang thang
VD:10.000.000, lai suat=0.5%/thang , tien vay:3 thang ;
T1 = 10.000.000 +10.000.000*0.5
T2 = T1+ T1*0.5
T3 = T2 +T2*0.5
*/

function Check(){
    var totalmoney=+document.getElementById("money").value;
    var month=+document.getElementById("month").value;
    let rate=0.05;
    var x=1;
    let money=totalmoney;
    if(totalmoney>50000 && month>1){
    while(x<=month){
        interest=money*rate;
        totalmoney= money + interest;
        money=totalmoney;
        x++;
    }
    document.getElementById("result").innerHTML="So tien nhan duoc la: "+totalmoney +" " +"VND";
}else{
    document.getElementById("result").innerHTML="Vui long kiem tra lai ";
}

}