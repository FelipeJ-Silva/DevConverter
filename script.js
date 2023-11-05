const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit)

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueConverted = 0;

function handleSubmit(e) {
    e.preventDefault();
    
    if(!inputValue.value || inputValue.value < 0) {
        alert('Informe um valor correto!');
        return;
    } else if (!selectedCurrency.value) {
        alert('Escolha uma moeda!');
        result;
    }

    converter();
};

function converter() {
    if(selectedCurrency.value === 'eur') {
        valueConverted = inputValue.value / 5.26;
        result.innerHTML = valueFormatter('pt-BR', 'EUR');
        
        animeteResult();
    } else if(selectedCurrency.value === 'dol') {
        valueConverted = inputValue.value / 4.90;
        result.innerHTML = valueFormatter('en-US', 'USD');

        animeteResult();
    }

    inputValue.valeu = '';
    selectedCurrency.value = '';
};

function valueFormatter(locale, currency ) {
    const value = valueConverted.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}` });
    return `<span>🤑</span> ${value} <span>🤑</span>`;
};

function animeteResult () {
    return result.animate([
        { transform: 'translateY(-150px)'},
        { transform: 'translateY(0px)'},
    ], { duration: 500});
};