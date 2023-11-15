function encrypt() {
    var russianAlphabet = [
        'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м',
        'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ',
        'ы', 'ь', 'э', 'ю', 'я'
    ];  
    
    var word = document.getElementById("word").value;
    var shift = parseInt(document.getElementById("shift").value);
    var cipherArr = [];

    for (var i   = 0; i < word.length; i++) {
        if (!russianAlphabet.includes(word[i].toLowerCase())) {
            cipherArr.push(word[i]);
        }
        for (var j = 0; j < russianAlphabet.length; j++) {
            if (word[i].toLowerCase() === russianAlphabet[j]) {
                var newIndex = (j + shift) % russianAlphabet.length;
                var encryptedChar = russianAlphabet[newIndex];
                if (word[i] === word[i].toUpperCase()) {
                    encryptedChar = encryptedChar.toUpperCase();
                }
                cipherArr.push(encryptedChar);
            }
        }
    }
    document.writeln(cipherArr.join(''));
}
