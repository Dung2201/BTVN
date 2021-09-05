function prime(num) {
    if (num = 2) {
        return true
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
let number = prompt('Số lượng nguyên tố cần in ra',);
let count = 1;   // số đếm
let result = '';  //Kết quả
let a = 2;        // xét từ số 2.

while (count <= number) {
    if (prime(a) == true) {
        result += a + ' ';
        count++
    }
    a++;
}
document.write(result);
