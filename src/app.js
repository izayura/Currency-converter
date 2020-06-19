class Rate{
	constructor(name, id, symbol){
		this.name=name;
		this.id=id;
		this.symbol=symbol;
	}
}

class CreateRateContainer extends Rate{
	constructor(name, id, symbol){
		super(name, id, symbol);
	}

		createContainer(){
			let currencyContainer=document.getElementById("containerRates");
			currencyContainer.innerHTML+=
			`
			<section class="col-sm-12 col-md-3 py-2 my-2 bg-primary border heightCurrency">
			<img src="img/${this.id}.png" alt="${this.name}">
            <h4>${this.name} Currency</h4>
            <p id="${this.name}" class="h3">${this.name}</p>
			</section>
			`
		}
}
class DisplayRate extends CreateRateContainer{
	constructor(name, id, symbol){
		super(name, id, symbol);
	}

	showRate(){
		return fetch('https://api.exchangeratesapi.io/latest?base=MXN')
		.then(response=>response.json())
		.then((data) => {
			let MxnRate = document.getElementById('MXN');
			let MxnCurrency =MxnRate.value * data.rates.MXN;
			console.log(MxnCurrency);
			let alert = document.getElementById('alert');
			alert.innerHTML=MxnRate.validationMessage;
			let nameRate=this.name;
			console.log(data);
			console.log(nameRate);
			let getDOM = `document.getElementById("${this.id}")`;
			console.log(getDOM);
			let getDataRate=`data.rates.${this.name}`;
			//let myJSON = JSON.parse(getDataRate);
			console.log(data.rates.CAD);
			//console.log(myJSON);
			console.log(getDataRate);
			let result= "data.rates."+nameRate;
			console.log(result);
			let convertingRate=MxnCurrency*("data.rates."+nameRate);
			console.log(convertingRate);
			let message= `${this.symbol} `;
			let displayRate=`${getDOM}.innerHTML=${message} ${convertingRate}`;
			console.log(displayRate);
		    return displayRate;
		})
		.catch((error)=>{
			console.log('Fetch Error :-S', error);
		})
	}
}


const UsdRate=new DisplayRate("USD","USD","$");
const EurRate=new DisplayRate("EUR", "EUR", "€");
const CadRate=new DisplayRate("CAD", "CAD", "$");

console.log(UsdRate.name);
console.log(EurRate.id);
console.log(CadRate.symbol);
console.log(EurRate.showRate());
EurRate.createContainer();
UsdRate.createContainer();
CadRate.createContainer();