const selectState = document.querySelector("#state");
const selectLga = document.querySelector("#lga");
const selectCountry = document.querySelector("#country");
selectState.length = 0;
selectCountry.length = 0;






const data = async () => {
    const response = await axios.get('http://locationsng-api.herokuapp.com/api/v1/states');
    const response2 = await axios.get('https://restcountries.eu/rest/v2/all');
    if (response.data.Error) {
      return [];
    } else {
		let option;
		response.data.forEach((result, i) => {
			console.log(response.data[i].name);
			option = document.createElement("option");
			option.text = response.data[i].name;
			option.value = response.data[i].name;
			selectState.add(option);
		})
	}
    if (response2.data.Error) {
      return [];
    } else {
		console.log(response2)
		let option2;
		response2.data.forEach((result, i) => {
			console.log(response2.data[i].name);
			option2 = document.createElement("option");
			option2.text = response2.data[i].name;
			option2.value = response2.data[i].name;
			selectCountry.add(option2);
		})
		if (response2) {
		$('.picker1').selectpicker();
		}
	}
	selectState.addEventListener("change", async () => {
	selectLga.length = 1;
	const state = selectState.value;
	console.log(state)
	const response = await axios.get(`http://locationsng-api.herokuapp.com/api/v1/states/${state}/lgas`);

	if (response.data.Error) {
		return [];
	} else {
		let option;
		response.data.forEach((result, i) => {
			console.log(response.data[i]);
			option = document.createElement("option");
			option.text = response.data[i];
			option.value = response.data[i];
			selectLga.add(option)
		})
		$('.picker').selectpicker();
	}
})
  }

data();


