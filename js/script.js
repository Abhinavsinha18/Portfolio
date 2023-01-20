const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})



var preloader = document.getElementById("loading");
function myfunc(){
		preloader.style.display="none";
}



function mouse(){
	let img = document.getElementById("hii");
	let h22 = document.getElementById("h22");
	let anc = document.getElementById("anc");
	img.src = "img/hiii2.gif"
	h22.innerText = "Resume📄"
	// h22.style.padding = "5px";
	// h22.style.border = "1px solid black";
	anc.href= "https://drive.google.com/file/d/1wyCRheXGUvsypHoKTaEAKLPDX8hxSHqr/view?usp=drivesdk"
	h22.style.background = "#30ff00";
	h22.style.borderRadius = "10px";
	

}

function leave(){
	let img = document.getElementById("hii");
	let h22 = document.getElementById("h22");
	img.src = "img/Untitled-8-720p-unscreen.gif"
	h22.innerText = "Hii 👋"
	h22.style.padding = "5px";
	h22.style.border = "none";
	h22.style.background = "none";
}