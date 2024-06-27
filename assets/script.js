//https://grafikart.fr/tutoriels/javascript


const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
let index = 0;

function init() {
	const arrow_left = document.querySelector(".arrow_left");
	arrow_left.addEventListener('click', () => previmg(-1));

	const arrow_right = document.querySelector(".arrow_right");
	arrow_right.addEventListener('click', () => nextimg(1));

	add_dot()

	select_dot()

}
init();

function previmg(value) {
	index += value;
	if (index < 0) {
		index = slides.length - 1;
	}
	update_slide(index);
}

function nextimg(value) {
	index += value;
	if (index > slides.length - 1) {
		index = 0;
	}
	update_slide(index);
}

function update_slide(index) {
	let banner_img = document.querySelector(".banner-img")
	banner_img.src = `./assets/images/slideshow/${slides[index].image}`

	let banner_txt = document.querySelector('.banner-txt')
	banner_txt.innerHTML = slides[index].tagLine;

	const dots = document.querySelectorAll(".dot")
	dots.forEach(dot => dot.classList.remove("dot_selected"))

	dots[index].classList.add("dot_selected")
}

function add_dot() {
	const containerdots = document.querySelector(".dots")
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("a")
		dot.classList.add("dot")
		dot.setAttribute("data-position", i)

		if (i === 0) {
			dot.classList.add("dot_selected")
		}
		containerdots.appendChild(dot)
	}
}

function select_dot() {
	const dots = document.querySelectorAll(".dot")
	dots.forEach((dot) => {
		dot.addEventListener("click", (event) => {
			event.preventDefault()
			let oldposition = dot.getAttribute("data-position")
			index = oldposition
			update_slide(index)
		})
	})
}