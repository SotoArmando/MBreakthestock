import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

function convertRemToPixels (rem)  {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function returnportionwidth(portion, w = document.body.getBoundingClientRect().width)  {
    console.log(portion, w * portion)
    return w * portion;
}

const encryptWithAES = (text, passphrase) => {
  return AES.encrypt(text, passphrase).toString();
};

const decryptWithAES = (ciphertext, passphrase) => {
  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(Utf8);
  return originalText;
};

export {
    convertRemToPixels,returnportionwidth,encryptWithAES,decryptWithAES
}