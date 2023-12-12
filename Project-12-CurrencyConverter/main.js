const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');

const resultElement = document.querySelector('.output');

const countries =[ {code: "USD", name: "United State Doller"},
{code: "INR", name: "Indian Rupees"},
{code: "CAD", name: "Canadian Dollar"},
{code: "MYR", name: "Malaysian Ringgit"},
{code: "JPY", name: "Japanese Yen"},
{code: "GBP", name: "British Pound Sterling"},
{code: "SGD", name: "Singapore Dollar"}

];

countries.forEach(country => {
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
// console.log(country);
  option1.value= option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;
    
    fromCurrencyElement.appendChild(option1);
    toCurrencyElement.appendChild(option2);

    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";

})
const getExchangeRate = async () => {
    // debugger;
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    // Fetch data from API...
    const response = await fetch(`https://v6.exchangerate-api.com/v6/244bfe771a55e6affd406cd3/latest/${fromCurrency}`);

    if (!response.ok) {
        console.error(`Failed to fetch exchange rates. Status: ${response.status}`);
        return;
    }

    const data = await response.json();

    if (data.result !== 'success') {
        console.error(`Failed to fetch exchange rates. Error: ${data.result.conversion_rates}`);
        return;
    }

    const rates = data.conversion_rates;

    if (!rates || !rates[toCurrency]) {
        console.error(`Conversion rate not available for ${toCurrency}`);
        return;
    }

    const conversion_rate = rates[toCurrency];
    // console.log('Conversion Rate:', conversion_rate);

    const convertedAmount = amount * conversion_rate;
    // console.log('Converted Amount:', convertedAmount);
    convertedAmountElement.value = convertedAmount;
};


fromAmountElement.addEventListener('input', getExchangeRate);