document.addEventListener("DOMContentLoaded", function () {
	const navbarComponent = document.querySelector(".Navbar_Component");
	navbarComponent.innerHTML = navbarElement();

	let widthViewport = window.innerWidth;

	if (widthViewport < 575) {
		navbarMobile();
	} else if (widthViewport > 575) {
		navbarDesktop();
	}
});

// Desktop Mode
function navbarDesktop() {
	const navbar = document.querySelector(".navbar");
	navbar.addEventListener("mouseover", mouseover);
	navbar.addEventListener("mouseleave", mouseleave);

	function mouseover() {
		navbar.classList.remove("bg-transparent");
		navbar.classList.add("bg-white");

		navbar.classList.remove("navbar-dark");
	}

	function mouseleave() {
		navbar.classList.remove("bg-white");
		navbar.classList.add("bg-transparent");

		navbar.classList.add("navbar-dark");
	}
}

// Mobile Mode
function navbarMobile() {
	const navbar = document.querySelector(".navbar");
	const navbarNav = document.querySelector("#navbarNav");

	// Hover Diaktifkan
	let hover = true;
	const toggle = document.querySelector(".Navbar_Mobile_Button");
	if (hover == true) {
		onHover(hover);
	}

	function mouseover() {
		navbar.classList.remove("bg-transparent");
		navbar.classList.add("bg-white");

		navbar.classList.remove("navbar-dark");
	}

	function mouseleave() {
		navbar.classList.remove("bg-white");
		navbar.classList.add("bg-transparent");

		navbar.classList.add("navbar-dark");
	}

	// Hover Diaktifkan

	// Event Click
	toggle.addEventListener("click", function () {
		// Hover Menyala kembali Ketika diklik
		if (navbarNav.offsetHeight > 0) {
			navbar.classList.remove("bg-white");
			navbar.classList.add("bg-transparent");

			navbar.classList.add("navbar-dark");
			hover = true;
			onHover(hover);
		}
		// Hover dimatikan Ketika diklik
		else if (navbarNav.offsetHeight < 1) {
			navbar.classList.add("bg-white");
			navbar.classList.remove("bg-transparent");

			navbar.classList.remove("navbar-dark");
			hover = false;
			onHover(hover);
		}
	});

	// Mode Menyala dan matikan hover
	function onHover(boolean) {
		if (boolean == true) {
			navbar.addEventListener("mouseover", mouseover);
			navbar.addEventListener("mouseleave", mouseleave);
		} else if (boolean == false) {
			navbar.removeEventListener("mouseover", mouseover);
			navbar.removeEventListener("mouseleave", mouseleave);
		}
	}
}

function navbarElement() {
	return `<nav class="navbar navbar-expand-sm navbar-dark fixed-top">
	<div class="container-fluid ">
		<a class="navbar-brand" href="#">Navbar</a>
		<button class="Navbar_Mobile_Button navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
			aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse sm-d-flex justify-content-sm-end" id="navbarNav">
			<div class="d-flex flex-column align-items-center">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="Nav_links nav-link" aria-current="page" href="#">Home</a>
					</li>
					<li class="nav-item d-flex gap-3">
						<p class="nav-link">Product</p>
						<div class="Link_dropdown d-sm-none pt-2" data-bs-toggle="collapse"
							data-bs-target="#Product_Dropdown" aria-expanded="false"
							aria-controls="Product_Dropdown">
							<i class="fa-solid fa-caret-down"></i>
						</div>
					</li>
				</ul>
				<!-- Product Menu -->
				<ul class="collapse m-0 d-sm-none" id="Product_Dropdown">
					<!-- Food Container -->
					<li class="nav-item d-flex gap-3">
						<a class="Nav_links dropdown-item" href="#">Food Container</a>
						<div class="Link_dropdown d-sm-none pt-2" data-bs-toggle="collapse"
							data-bs-target="#Food_Container_Dropdown" aria-expanded="false"
							aria-controls="Food_Container_Dropdown">
							<i class="fa-solid fa-caret-down"></i>
						</div>
					</li>
					<ul class="collapse m-0 d-sm-none" id="Food_Container_Dropdown">
						<li class="nav-item"><a class="Nav_links dropdown-item" href="">Jade</a></li>
						<li><a class="Nav_links dropdown-item" href="">Cosmo</a></li>
						<li><a class="Nav_links dropdown-item" href="">Cleo</a></li>
						<li><a class="Nav_links dropdown-item" href="">Luna</a></li>
						<li><a class="Nav_links dropdown-item" href="">Jade</a></li>
						<li><a class="Nav_links dropdown-item" href="">Leo</a></li>
						<li><a class="Nav_links dropdown-item" href="">Gemini</a></li>
						<li><a class="Nav_links dropdown-item" href="">Ella</a></li>
					</ul>
					<!-- Beverageware -->
					<li class="nav-item d-flex gap-3">
						<a class="Nav_links dropdown-item" href="#">Beverageware</a>
						<div class="Link_dropdown d-sm-none pt-2" data-bs-toggle="collapse"
							data-bs-target="#Beverageware_Dropdown" aria-expanded="false"
							aria-controls="Beverageware_Dropdown">
							<i class="fa-solid fa-caret-down"></i>
						</div>
					</li>
					<ul class="collapse m-0 d-sm-none" id="Beverageware_Dropdown">
						<li><a class="Nav_links dropdown-item" href="">Akira</a></li>
						<li><a class="Nav_links dropdown-item" href="">Momo</a></li>
						<li><a class="Nav_links dropdown-item" href="">Shobu</a></li>
						<li><a class="Nav_links dropdown-item" href="">Izzy</a></li>
						<li><a class="Nav_links dropdown-item" href="">Zen</a></li>
						<li><a class="Nav_links dropdown-item" href="">Kylo</a></li>
					</ul>
				</ul>
				<!-- Product Menu -->
			</div>
		</div>
	</div>
	</nav>`;
}
