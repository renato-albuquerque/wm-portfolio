// variables

const menuHamburger = document.querySelector(".fa-bars")
const mobileMenuHide = document.querySelector(".mobileMenuHide")
const mobileMenuOpen = document.querySelector(".mobileMenuOpen")
const mobileMenuItemHome = document.querySelector(".mobileMenuItemHome")
const mobileMenuItemAbout = document.querySelector(".mobileMenuItemAbout")
const mobileMenuItemEducation = document.querySelector(".mobileMenuItemEducation")
const mobileMenuItemServices = document.querySelector(".mobileMenuItemServices")
const mobileMenuItemSkills = document.querySelector(".mobileMenuItemSkills")
const mobileMenuItemContacts = document.querySelector(".mobileMenuItemContacts")

// functions

function openMenuHamburger() {
    mobileMenuHide.classList.toggle("mobileMenuOpen")

    if (mobileMenuHide.classList.contains("mobileMenuOpen")) {
        menuHamburger.classList.remove("fa-bars")
        menuHamburger.classList.add("fa-x")
    } else {
        menuHamburger.classList.add("fa-bars")
        menuHamburger.classList.remove("fa-x")
    }
}

function hideMenuHamburger() {
    mobileMenuHide.classList.toggle("mobileMenuOpen")
    menuHamburger.classList.remove("fa-x")
    menuHamburger.classList.add("fa-bars")
}

function share() {
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'Portfólio - Luciano Costa',
			text: 'Consultor Empresarial',
			url: 'https://portfolio-lucianocosta.vercel.app/'
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}