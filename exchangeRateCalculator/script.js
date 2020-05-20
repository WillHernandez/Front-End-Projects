// using JSON.fetch to get exchange rate api

// could not find a free exchange api that would allow the base code to be changed so USD is the online option at the moment
const selectOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const swap = document.getElementById('btn');
const rateText = document.getElementById('rate');
const selectTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');

// function calculate will be called on every element
// Fetches exchange rates and updates the dom

function calculate(){

  const countCode1 = selectOne.value;
  const countCode2 = selectTwo.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${countCode1}`)
    .then(res => res.json())
    .then(data => {
      let rate = data.rates[countCode2];
      rateText.innerText = (`1 ${countCode1} = ${rate} ${countCode2}`);
      amountTwo.value = (amountOne.value * rate).toFixed(2);
    })
};

selectOne.addEventListener('change', calculate);    
amountOne.addEventListener('input', calculate);
selectTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  debugger;
  let temp = selectOne.value;
  selectOne.value = selectTwo.value;
  selectTwo.value = temp;
  calculate();
})

calculate();

