// could not find a free exchange api that would allow the base code to be changed so USD is the online option at the moment
const selectOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const selectTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');

const calculate = async () => {
	const url = `http://api.exchangeratesapi.io/v1/latest?access_key=9393704c9c12219feeefa852cf710538&symbols=USD,AUD,CAD,PLN,MXN&format=1`

	try {
		const res = await fetch(url);
		const data = await res.json();
		let secondRate = data.rates[selectTwo.value];
		amountTwo.value = String((Number(amountOne.value) * Number(secondRate)).toFixed(2));
	} catch(err) {
		console.log(err);
	}
}

selectOne.addEventListener('change', calculate);    
amountOne.addEventListener('input', calculate);
selectTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

calculate();

