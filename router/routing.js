let baseUrl = window.location.origin;
console.log("🚀 ~ baseUrl:", baseUrl);

document.getElementById("index").addEventListener("click", function (event) {
	event.preventDefault();
	window.location.href = baseUrl + "/./index.html";
	console.log("diklik");
});

document.getElementById("food").addEventListener("click", function (event) {
	event.preventDefault();
	const linkfood = window.location.href = baseUrl + "/./pages/food.html";
	console.log(linkfood)
});

// document.getElementById("beverage").addEventListener("click", function (event) {
// 	event.preventDefault();
// 	window.location.href = "pages/beverage.html";
// });

// const tes = document.getElementById("ngetes");

// tes.innerHTML = "asdsd";
