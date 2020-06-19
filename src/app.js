class Rate{
	constructor(name, symbol){
		this.name=name;
		this.symbol=symbol;
	}
}
class CreateRateContainer extends Rate{
	constructor(name, symbol){
		super(name, symbol);
	}

		createContainer(){
			let rateContainer=document.getElementById("containerRates");
			rateContainer.innerHTML+=
			`
			<section class="col-sm-12 col-md-3 py-2 my-2 bg-primary border heightCurrency">
			<img src="img/${this.name}.png" alt="${this.name}">
            <h4>${this.name} Currency</h4>
            <p id="${this.name}" class="h3">${this.symbol}</p>
			</section>
			`
		}
}
class DisplayCurrency extends CreateRateContainer{
	constructor(name, symbol){
		super(name, symbol);
	}
	
	displayCurrencies(){
		return fetch('https://api.exchangeratesapi.io/latest?base=MXN')
		.then(response=>response.json())
		.then((data) => {
			let MxnRate = document.getElementById('MXN');
			let MxnCurrency =MxnRate.value * data.rates.MXN;
			let alert = document.getElementById('alert');
			alert.innerHTML=MxnRate.validationMessage;
			let getDOM = document.getElementById(this.name);
			let getDataRate=data.rates[this.name];
			let convertingRate=(MxnCurrency*getDataRate).toFixed(2);
			getDOM.innerHTML=`${this.symbol}  ${convertingRate}`;
		})
		.catch((error)=>{
			console.log('Fetch Error :-S', error);
		})
	}
}

const UsdRate=new DisplayCurrency("USD","$");
const EurRate=new DisplayCurrency("EUR", "€");
const CadRate=new DisplayCurrency("CAD", "$");
let arrayRates=[UsdRate, EurRate, CadRate];

createContainers = () => {
	arrayRates.forEach(rate=>{
		rate.createContainer();
	})
}

updateCurrenciesDisplayed = () => {
	arrayRates.forEach(rate=>{
		rate.displayCurrencies();
	})
}
