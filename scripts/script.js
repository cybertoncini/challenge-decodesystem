const inputText = document.querySelector(".input_text");
const outputText = document.querySelector(".output_text");


function checkText(event) {
  let verifyText = /^[a-z\n\s]+$/.test(event.target.value) || event.target.value == "";
  if (!verifyText) {
    btnBlock(event);
  }
  else {
    btnUnblock(event)
  }
}

function btnBlock(event) {
  document.querySelector('.encrypt').setAttribute('disabled', true);
  document.querySelector('.encrypt').style.setProperty('background-color', 'var(--medium-gray)');
  document.querySelector('.encrypt').style.setProperty('color', 'var(--dark-blue)');
  document.querySelector('.decrypt').setAttribute('disabled', true);
  document.querySelector('.decrypt').style.setProperty('background-color', 'var(--medium-gray)');
}

function btnUnblock(event) {
  document.querySelector('.encrypt').removeAttribute('disabled');
  document.querySelector('.encrypt').style.setProperty('background-color', 'var(--dark-blue)');
  document.querySelector('.encrypt').style.setProperty('color', 'white');
  document.querySelector('.decrypt').removeAttribute('disabled');
  document.querySelector('.decrypt').style.setProperty('background-color', '#D8DFE8');
}

function btnEncrypt() {
  const textEncrypt = encrypt(inputText.value);
  outputText.value = textEncrypt;
  inputText.value = "";
}

function btnDecrypt() {
  const textDecrypt = decrypt(inputText.value);
  outputText.value = textDecrypt;
  inputText.value = "";
}

function encrypt(stringEncrypted) {

  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  stringEncrypted = stringEncrypted.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncrypted.includes(matrizCodigo[i][0])) {
      stringEncrypted = stringEncrypted.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncrypted;
}

function decrypt(stringDecrypted) {
  let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
  stringDecrypted = stringDecrypted.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDecrypted.includes(matrizCodigo[i][0])) {
      stringDecrypted = stringDecrypted.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringDecrypted;
}

function removeRightSideBar() {
  const removeRightSideBar = document.querySelector(".right_side_bar").remove();
  const showRightSideBarOutput = document.querySelector(".right_side_bar_output").style.display = 'flex';
}

function copy() {
  let copyText = document.querySelector(".output_text");
  copyText.select();
  copyText.setSelectionRange(0, 9999);
  document.execCommand("copy");
}