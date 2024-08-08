const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Masukkan angka pertama: ', (num1) => {
    readline.question('Masukkan operator (+ atau -): ', (operator) => {
        readline.question('Masukkan angka kedua: ', (num2) => {
            const angka1 = parseFloat(num1);
            const angka2 = parseFloat(num2);

            let hasil;

            switch (operator) {
                case '+':
                    hasil = angka1 + angka2;
                    break;
                case '-':
                    hasil = angka1 - angka2;
                    break;
                default:
                    console.log('Operator tidak valid!');
                    readline.close();
                    return;
            }

            console.log(`Hasil: ${angka1} ${operator} ${angka2} = ${hasil}`);
            readline.close();
        });
    });
});
