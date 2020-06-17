convertCurrency = () => {
	fetch('https://api.exchangeratesapi.io/latest?base=MXN')
		.then((response) => {
			if (response.status !== 200) {
				console.log('There was a problem. Status Code: ' + response.status);
				return;
			}
			response.json().then((data) => {
				let MxnRate = document.getElementById('MXN');
				let MxnCurrency =MxnRate.value * data.rates.MXN;
				let alert = document.getElementById('alert');
				alert.innerHTML=MxnRate.validationMessage;
				let UsdRate = document.getElementById('USD');
				UsdRate.innerHTML = '$ ' + (MxnCurrency * data.rates.USD).toFixed(2);
				let EurRate = document.getElementById('EUR');
				EurRate.innerHTML = '€ ' + (MxnCurrency * data.rates.EUR).toFixed(2);
				let CadRate = document.getElementById('CAD');
				CadRate.innerHTML = '$ ' + (MxnCurrency * data.rates.CAD).toFixed(2);
			});
		})
		.catch((error) => {
			console.log('Fetch Error :-S', error);
		});
};