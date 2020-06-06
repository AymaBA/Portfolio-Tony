btn = document.querySelector("i")
nav = document.querySelector(".nav")
header = document.querySelector(".header")
war = document.querySelector(".war")
contact = document.querySelector(".contact-link")
overlay = document.querySelector(".overlay1")
scrll = document.querySelector(".scroll")
scrllTop = document.querySelector(".Top")

let first_name = document.querySelector("#first_name");
let last_name = document.querySelector("#last_name")
let email = document.querySelector("#email");
let telephone = document.querySelector("#telephone");
let comments = document.querySelector("#comments")
let form = document.querySelector("#form");
const ok = document.querySelector(".ok");

function emailIsValid(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

form.addEventListener("submit", (e) => {
	alert("qsedfsdf")
	e.preventDefault();
	if (first_name.value && last_name.value && email.value && telephone.value && comments.value) {
		if (emailIsValid(email.value)) {
			fetch("https://ayma-mail.ml/services/mail/",{
				method: "post",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"from": email.value,
					"subject": "Méssage reçu tony-Fernandes.tk",
					"siteName":" tony-Fernandes.tk",
					"nom":first_name.value+" "+last_name.value,
					"telephone":telephone.value,
					"text": comments.value,
					"to": "adressepoubelledu12v0@gmail.com"
				})
			});
			
			ok.innerHTML = `<p class="nice">Merci de nous avoir contacter. Nous vous recontacterons très bientôt. </p>`;
			setTimeout( function(){window.location.reload()},5000);
		}else{
			alert("Veuillez saisir une email valide");
		}
	}else{
		alert("Veuillez remplire tout les champs du formumaire.")
	}

});



btn.onclick = function () {
	nav.classList.toggle("nav1");
	overlay.classList.toggle("overlay");
	header.classList.toggle("header1");
}

overlay.onclick = function () {
	overlay.classList.remove("overlay")
	nav.classList.remove("nav1");
	header.classList.remove("header1")
}


scrll.onclick = function scroll() {
	window.scroll({
		top: 2500,
		left: 0,
	});
}

scrllTop.onclick = function () {
	window.scroll({
		top: 0,
		left: 0,

	});

}









