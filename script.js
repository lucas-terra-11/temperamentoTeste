document.addEventListener('DOMContentLoaded', function () {
    // Cada constante armazena o elemento correspondente
    const instructions = document.getElementById('instructions');
    const introducao = document.getElementById('introducao');
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');
    const result = document.getElementById('result');
    const temperamentDetails = document.getElementById('temperament-details');

    // remover css hidden para tornar o elemento visível em instrucions
    introducao.classList.remove('hidden');

    // evento ao usuário clicar no botão, as instruções são ocultadas e a primeira parte do conteúdo é exibida.
    document.getElementById('instrucao').addEventListener('click', function () {
        introducao.classList.add('hidden');
        instructions.classList.remove('hidden');
    }); 
    
    // evento ao usuário clicar no botão, as instruções são ocultadas e a primeira parte do conteúdo é exibida.
    document.getElementById('start-part1').addEventListener('click', function () {
        instructions.classList.add('hidden');
        part1.classList.remove('hidden');
    }); 

    // ao clicar no elemento 'submit-part1', a primeira parte do conteúdo é ocultada, e a segunda parte é exibida.
    document.getElementById('submit-part1').addEventListener('click', function () {
        part1.classList.add('hidden');
        part2.classList.remove('hidden');
    });
    // segunda parte do teste é exibida
    document.getElementById('submit-part2').addEventListener('click', function () {
        part2.classList.add('hidden');
        result.classList.remove('hidden');
        showResult();
    });
    // teste finalizado
    document.getElementById('finish-test').addEventListener('click', function () {
        alert('Teste finalizado.');
        location.reload();
    });

    function showResult() {
        // Contadores para as respostas da Parte 1 e Parte 2
        let countA1 = 0, countB1 = 0;
        let countA2 = 0, countB2 = 0;

        // Verifica as respostas da Primeira Parte
        for (let i = 1; i <= 19; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA1++;
            } else if (answer && answer.value === 'B') {
                countB1++;
            }
        }

        // Verifica as respostas da Segunda Parte
        for (let i = 20; i <= 32; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA2++;
            } else if (answer && answer.value === 'B') {
                countB2++;
            }
        }

        // Determina o temperamento
        let temperament = '';

        if (countA1 > countB1 && countA2 > countB2) {
            temperament = "Sanguíneo";
        } else if (countA1 > countB1 && countB2 > countA2) {
            temperament = "Colérico";
        } else if (countB1 > countA1 && countA2 > countB2) {
            temperament = "Fleumático";
        } else if (countB1 > countA1 && countB2 > countA2) {
            temperament = "Melancólico";
        }

        // Exibe o resultado
        switch (temperament) {
            case 'Sanguíneo':
                temperamentDetails.innerHTML = '<p>Você é Sanguíneo. <br> Detalhes...</p>';
                break;
            case 'Colérico':
                temperamentDetails.innerHTML = '<p>Você é Colérico. <br> Detalhes...</p>';
                break;
            case 'Melancólico':
                temperamentDetails.innerHTML = '<p>Você é Melancólico. <br> Detalhes...</p>';
                break;
            case 'Fleumático':
                temperamentDetails.innerHTML = '<p>Você é Fleumático. <br> Detalhes...</p>';
                break;
            default:
                temperamentDetails.innerHTML = '<p>Temperamento não identificado.</p>';
                break;
        }
    }
});
