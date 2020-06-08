doingFetch = () => {
	fetch('https://api.exchangeratesapi.io/latest?base=MXN')
		.then((response) => {
			if (response.status !== 200) {
				console.log('There was a problem. Status Code: ' + response.status);
				return;
			}
			response.json().then((data) => {
				console.log(data);
				console.log(data.base);
				var MxnRate = document.getElementById('MXN');
				let MxnCurrency = MxnRate.value * data.rates.MXN;
				console.log(MxnCurrency);
				var UsdRate = document.getElementById('USD');
				UsdRate.innerHTML = '$ ' + MxnCurrency * data.rates.USD;
				var EurRate = document.getElementById('EUR');
				EurRate.innerHTML = '€ ' + MxnCurrency * data.rates.EUR;
				var CadRate = document.getElementById('CAD');
				CadRate.innerHTML = '$ ' + MxnCurrency * data.rates.CAD;
				MxnRate.value = '';
			});
		})
		.catch((error) => {
			console.log('Fetch Error :-S', error);
		});
};

sendCurrency = () => {
	doingFetch();
	console.log('click');
};
