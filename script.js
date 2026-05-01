    const a1 = document.getElementById('1');
    const a2 = document.getElementById('2');
    const a3 = document.getElementById('3');
    const a4 = document.getElementById('4');
    const a5 = document.getElementById('5');
    const a6 = document.getElementById('6');
    const a7 = document.getElementById('7');
    const a8 = document.getElementById('8');
    const a9 = document.getElementById('9');
    const a0 = document.getElementById('0');

    const soma = document.getElementById('+');
    const subtracao = document.getElementById('-');
    const multiplicacao = document.getElementById('*');
    const divisao = document.getElementById('/');
    const igual = document.getElementById('=');

    const resultado = document.getElementById('resultado');

    if (a1) {
        a1.addEventListener('click', () => {
            resultado.textContent += '1';
        });
    }

    if (a2) {
        a2.addEventListener('click', () => {
            resultado.textContent += '2';
        });
    }

    if (a3) {
        a3.addEventListener('click', () => {
            resultado.textContent += '3';
        });
    }
            
    if (a4) {
        a4.addEventListener('click', () => {
            resultado.textContent += '4';
        });
    }

    if (a5) {
        a5.addEventListener('click', () => {
            resultado.textContent += '5';
        });
    }

    if (a6) {
        a6.addEventListener('click', () => {
            resultado.textContent += '6';
        });
    }

    if (a7) {
        a7.addEventListener('click', () => {
            resultado.textContent += '7';
        });
    }

    if (a8) {
        a8.addEventListener('click', () => {
            resultado.textContent += '8';
        });
    }

    if (a9) {
        a9.addEventListener('click', () => {
            resultado.textContent += '9';
        });
    }

    if (a0) {
        a0.addEventListener('click', () => {
            resultado.textContent += '0';
        });
    }

    if (soma) {
        soma.addEventListener('click', () => {
            resultado.textContent += '+';
        });
    }

    if (subtracao) {
        subtracao.addEventListener('click', () => {
            resultado.textContent += '-';
        });
    }

    if (multiplicacao) {
        multiplicacao.addEventListener('click', () => {
            resultado.textContent += '*';
        });
    }

    if (divisao) {
        divisao.addEventListener('click', () => {
            resultado.textContent += '/';
        });
    }

    if (igual) {
        igual.addEventListener('click', () => {
            try {
                resultado.textContent = eval(resultado.textContent);
            } catch (error) {
                resultado.textContent = 'Erro';
            }
        });
    }

    const clear = document.getElementById('clear');
    if (clear) {
        clear.addEventListener('click', () => {
            resultado.textContent = '';
        });
    }