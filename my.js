/*
let number = +prompt('Nhap vao 1 so');
if(number ==2){
    alert('Hom nay la thu Hai');
}else if(number==3){
    alert('Hom nay la thu Ba');
}else if(number==4){
    alert('Hom nay la thu Tu');
}else if(number==5){
    alert('Hom nay la thu Nam');
}else if(number==6){
    alert('Hom nay la thu Sau');
}else if(number==7){
    alert('Hom nay la thu Bay');
}else if(number==8){
    alert('Hom nay la Chu Nhat');
}else{
    alert('so k hop le');
}
*/
//truong hop switch-case
/*
let number = +prompt('Nhap vao 1 so');
switch (number) {
    case 2:
        let input = +prompt('nhap tuan');
        switch (input) {
            case 1:
                alert('Hom nay la thu Hai tuan 1');
                break;
            case 2:
                alert('Hom nay la thu Hai tuan 2');
                break;
        }
        break;
        alert('Hom nay la thu Hai');
        break;
    case 3:
        alert('Hom nay la thu Ba');
        break;
    case 4:
        alert('Hom nay la thu Tu');
        break;
    default:
        alert('Dau vao k hop le');
}
*/
let month = +prompt('Nhap vao 1 thang');
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
        alert('Co 31 ngay');
        break;
    case 4:
    case 6:
    case 8:
    case 10:
        alert('Co 30 ngay');
        break;
    case 2:
        alert('Co 28 ngay');
        break;
    default:
        alert('Khong hop le');
}