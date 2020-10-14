const selectState = document.querySelector("#state");
const selectLga = document.querySelector("#lga");
const selectCountry = document.querySelector("#country");
selectCountry.length = 0;


const data = async () => {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    if (response.data.Error) {
      return [];
    } else {
		console.log(response)
		let option;
		response.data.forEach((result, i) => {
			console.log(response.data[i].name);
			option = document.createElement("option");
			option.text = response.data[i].name;
			option.value = response.data[i].name;
			selectCountry.add(option);
		})
		if (response) {
		$('.picker1').selectpicker();
		}
	}
  }

data();


