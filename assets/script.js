const txtElement = ['Mahasiswa', 'Programmer', 'Jadi-jadian'];
let hitung = 0;
let index = 0;
let currentTxt = '';
let huruf = '';

(function ketik() {

  if (hitung == txtElement.length) {
    hitung = 0;
  }
  currentTxt = txtElement[hitung];
  huruf = currentTxt.slice(0, ++index);
  document.querySelector('.ketik').textContent = huruf;
  if (huruf.length == currentTxt.length) {
    hitung++;
    index = 0;
  }
  setTimeout(ketik, 400);
})();