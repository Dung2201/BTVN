const TANK_SPEED = 5;
function moveUp() {
    //slice(start,end)-> cat chuoi tu start->end
    //parseInt() -> ep kieu du lieu number
    let currentTop =parseInt(document.getElementById('tank').style.top)
    document.getElementById('tank').style.top = currentTop-TANK_SPEED +"px";
   //let currentTop =parseInt()(document.getElementById('tank').style.top);
   //document.getElementById('tank').style.top=currentTop- TANK_SPEED +"px";
}
function moveLeft() {
    let currentLeft =parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = currentLeft- TANK_SPEED +"px";
}
function moveRight() {
    let currentRight =parseInt(document.getElementById('tank').style.left);
    document.getElementById('tank').style.left = currentRight + TANK_SPEED +"px";
}
function moveDown() {
    let currentDown =parseInt(document.getElementById('tank').style.top);
    document.getElementById('tank').style.top = currentDown + TANK_SPEED +"px";
}

//xu ly va cham
function collision(){
    let widthTank=parseInt(document.getElementById('tank').style.width);
    console.log(widthTank)
    //va tram khi top va left cua xe tang trung vs top va left cua boom
    //b1 lay tao do top, left cua xe tang
    let leftcurrentTank=parseInt(document.getElementById('tank').style.left);
    let topcurrentTank=parseInt(document.getElementById('tank').style.top);
    //b1 lay tao do top, left cua xe tang
    let leftcurrentboom=parseInt(document.getElementById('boom').style.left);
    let topcurrentboom=parseInt(document.getElementById('boom').style.top);
    console.log(leftcurrentTank+'-'+topcurrentTank);
    console.log(leftcurrentboom+'-'+topcurrentboom);

    if(leftcurrentTank==leftcurrentboom&&Math.abs(topcurrentTank-topcurrentboom)<=widthTank){
        alert('game over')
    }
}
