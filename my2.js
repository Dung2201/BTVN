 let text = prompt('Nhap vao 1 chu');
switch (text) {
    case 'o':
    case 'a':
    case 'e':
    case 'u':
    case 'i':
        alert('Kí tự là nguyên âm');
        break;
    default:
        alert('Kí tự là phụ âm');
}
