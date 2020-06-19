class Rate{
	constructor(name, id, symbol){
		this.name=name;
		this.id=id;
		this.symbol=symbol;
	}
}

class CreateRateContainer extends Rate{
	constructor(name, id){
		super(name, id);
	}

		createContainer(){
			var para = document.createElement("p");
            var node = document.createTextNode(`${this.name}`);
			para.appendChild(node);

			var element = document.getElementById("containerRates");
			var child = document.getElementById("testing");
			element.insertBefore(para,child);
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


const UsdRate=new Rate("USD","USD","$");
const EurRate=new CreateRateContainer("EUR", "EUR", "€");
const CadRate=new DisplayRate("CAD", "CAD", "$");

console.log(UsdRate.name);
console.log(EurRate.id);
console.log(CadRate.symbol);
console.log(CadRate.showRate());