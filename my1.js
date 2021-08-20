function doi() {

let birthday = document.getElementById('birthday').value;
let date=new Date(birthday);
let currendate = new Date()
birthdayYear = date.getFullYear();

let today= new Date();
let todayYear= today.getFullYear();
if(date.getMonth() > today.getMonth()){
    var tuoi = todayYear - birthdayYear - 1;
}else{
    var tuoi = todayYear - birthdayYear;
}
document.getElementById('result').innerHTML= "Hien nay ban " +tuoi + "tuoi";

}