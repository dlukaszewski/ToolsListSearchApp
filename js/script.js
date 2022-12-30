const input = document.querySelector(".search");
const li = document.querySelectorAll("li");

// Zapis funkcji z użyciem indexOf

// const filter = e => {
// 	const text = e.target.value.toLowerCase();

// 	li.forEach(el => {
// 		if (el.textContent.toLocaleLowerCase().indexOf(text) !== -1) {
// 			el.style.display = "block";
// 		} else {
// 			el.style.display = "none";
// 		}
// 	});
// };

// Zapis funkcji z użyciem RegExp - wyrażen regularnych. Flaga 'i' w wyrażeniu regularnym oznacza że mamy ignorować wielkość liter naszego input value

const filter = () => {
	li.forEach(item => {
		const match = new RegExp(input.value, "i").test(item.textContent);
		if (!match) {
			item.style.display = "none";
		} else {
			item.style.display = "block";
		}
	});
};

input.addEventListener("keyup", filter);