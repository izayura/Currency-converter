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
			let currencyContainer=document.getElementById("containerRates");
			currencyContainer.innerHTML+=
			`
			<section class="col-sm-12 col-md-3 py-2 my-2 bg-primary border heightCurrency">
			<img src="img/${this.name}.png" alt="${this.name}">
            <h4>${this.name} Currency</h4>
            <p id="${this.name}" class="h3">${this.name}</p>
			</section>
			`
		}
}
class DisplayRate extends CreateRateContainer{
	constructor(name, symbol){
		super(name, symbol);
	}

	showRate(){
		return fetch('https://api.exchangeratesapi.io/latest?base=MXN')
		.then(response=>response.json())
		.then((data) => {
			let MxnRate = document                                              .getElementById('MXN');
			let MxnCurrency =MxnRate.value * data.rates.MXN;
			console.log(MxnCurrency);
			let alert = document.getElementById('alert');
			alert.innerHTML=MxnRate.validationMessage;
			let getDOM = document.getElementById(this.name);
			console.log(getDOM);
			let getDataRate=data.rates[this.name];
			console.log(getDataRate);
			let convertingRate=(MxnCurrency*getDataRate).toFixed(2);
			console.log(convertingRate);
			getDOM.innerHTML=`${this.symbol}  ${convertingRate}`;
		})
		.catch((error)=>{
			console.log('Fetch Error :-S', error);
		})
	}
}

const UsdRate=new DisplayRate("USD","$");
const EurRate=new DisplayRate("EUR", "€");
const CadRate=new DisplayRate("CAD", "$");

console.log(UsdRate.name);
console.log(CadRate.symbol);
console.log(UsdRate.showRate());
console.log(EurRate.showRate());
console.log(CadRate.showRate());

EurRate.createContainer();
UsdRate.createContainer();
CadRate.createContainer();