function Check() {
    let hoaqua = document.getElementById("hoaqua").value;
    switch (hoaqua) {
        case 'Dưa hấu':
            document.getElementById('result').innerHTML = "40.000VND"
            break;
        case 'Bơ':
            document.getElementById('result').innerHTML = "30.000VND/kg"
            break;
        case 'Ổi':
            document.getElementById('result').innerHTML = "20.000VND/kg"
            break;
        case 'Táo':
            document.getElementById('result').innerHTML = "30.000VND/kg"
        case 'Xoài':
            document.getElementById('result').innerHTML = "40.000VND/kg"
            break;
        case 'Cam':
            document.getElementById('result').innerHTML = "40.000VND/kg"
            break;
        case 'Chôm Chôm':
            document.getElementById('result').innerHTML = "60.000VND/kg"
            break;
        case 'Măng Cụt':
            document.getElementById('result').innerHTML = "50.000VND/kg"
            break;
        case 'Sầu riêng':
            document.getElementById('result').innerHTML = "100.000VND/kg"
            break;
        default:
            document.getElementById('result').innerHTML = "Loại hoa quả đó hiện tại k có trong cửa hàng"
    }
}