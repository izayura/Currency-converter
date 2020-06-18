class Rate{
	constructor(name, id, symbol){
		this.name=name;
		this.id=id;
		this.symbol=symbol;
	}
}
class DisplayRate extends Rate{
	constructor(name, id, symbol){
		super(name, id, symbol);
	}

	showRate(){
		return fetch('https://api.exchangeratesapi.io/latest?base=MXN')
		.then(response=>response.json())
		.then((data) => {
			let MxnRate = document.getElementById('MXN');
			let MxnCurrency =MxnRate.value * data.rates.MXN;
			let alert = document.getElementById('alert');
			alert.innerHTML=MxnRate.validationMessage;
			let getDOM = `document.getElementById("${this.id}")`
			let convertingRate=`(${MxnCurrency}*data.rates.${this.name}).toFixed(2)`
			let message= `${this.symbol} `;
			let displayRate=`${getDOM}.innerHTML=${message} ${convertingRate}`
			console.log(displayRate);
		    return displayRate;
	})
	}
}

const UsdRate=new Rate("USD","USD","$");
const EurRate=new Rate("EUR", "EUR", "€");
const CadRate=new DisplayRate("CAD", "CAD", "$");

console.log(UsdRate.name);
console.log(EurRate.id);
console.log(CadRate.symbol);
//console.log(UsdRate.convertCurrency());
//console.log(EurRate.showRate());
console.log(CadRate.showRate());