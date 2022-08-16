const hash = function (string, pass) {
    const input = string;
    var salt = parseInt(pass);
        
    if(salt>26){
        salt = salt%26;
    }

    var inpArr = input.split('');

    var output = []

    for (i = 0; i < inpArr.length; i++) {
        var conV = inpArr[i].charCodeAt(0);
        var outSign = parseInt(conV) + parseInt(salt)

        let EncryptText = String.fromCharCode(outSign);
        output.push(EncryptText);
    }
    outputStr = output.join('')

    const bConvert = Buffer.from(outputStr).toString('base64');

    return bConvert;

}

const revHash = function (string, pass) {
    const inputRev = string;
    var saltRev = parseInt(pass);

    if(saltRev>26){
        saltRev = saltRev % 26;
    }

    const bReverse = Buffer.from(inputRev, 'base64').toString();

    var revArr = bReverse.split('');
    var revOutput = []

    for (j = 0; j < revArr.length; j++) { // runs loop with reverse input word array one by one character
        var revConV = revArr[j].charCodeAt(0);
        var revOutSign = parseInt(revConV) - parseInt(saltRev); // minuses the salt added while encryption
        let decryptText = String.fromCharCode(revOutSign); // converts the ascii to text
        revOutput.push(decryptText) // pushes final output to an array
    }
    revOutputStr = revOutput.join('')

    return revOutputStr;
}


module.exports = {hash, revHash}


// const key = require('keyhasher');

// var op = key.hash('okay', 3);
// console.log(op)

// var op2 = key.revHash(op, 3);
// console.log(op2)