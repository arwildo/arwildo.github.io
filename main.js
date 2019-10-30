// Contact window
// Get the modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', clickOutSide);

// Function to open modal
function openModal() {
	modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
	modal.style.display = 'none';
}

// Function to close modal if outside click
function clickOutSide(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}

// Scroll To Top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("scrollToTop").style.display = "block";
    } else {
        document.getElementById("scrollToTop").style.display = "none";
    }
   
}

function topFunction() {
 
     $('html, body').animate({scrollTop:0}, 'slow');
}

// Google Analytic
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-51659765-2');
