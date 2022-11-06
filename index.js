let readline = require('readline-sync');
let kmin = require('./kmin-lib');

function taoSoBiMat(min, max) {
    let soBiMat = [];
    for (let i = 1; i <= 5; i++) {
        let x = kmin.getRandomInteger(min, max);
        soBiMat.push(x);
    }
    return soBiMat;
}
function laySoNguoiDung() {
    let soNguoiDung = [];

    for (let i = 1; i <= 5; i++) {
        let x = readline.question(`Nhap so thu ${i}`);
        soNguoiDung.push(x);
    }

    return soNguoiDung;
}
function kiemTra(soBiMat, soNguoiDung) {
    for (let i = 1; i <= 5; i++) {
        if (soBiMat[i] !== soNguoiDung[i])
            return false;
    }
    return true;
}

function chayManChoi(capDo) {
    let soBiMat = taoSoBiMat(10 ** (capDo - 1), 10 ** capDo - 1);
    console.log(soBiMat);
    kmin.sleep(1000 * capDo);
    console.clear();
    let soNguoiDung = laySoNguoiDung();
    return [soBiMat, soNguoiDung];
}

function main() {
    for (let i = 1; i <= 5; i++) {
        let data = chayManChoi(i);
        let soBiMat = data[0];
        let soNguoiDung = data[1];
        if (kiemTra(soBiMat, soNguoiDung) == true) {
            console.log("Ban da doan dung");
        }
        else {
            console.log("Game over");
            break;
        }
    }
}
main();
