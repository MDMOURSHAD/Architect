// Preloader 
function load(){

	var loading = document.getElementsByClassName('preloader');

	loading[0].style.display = "none";
}

// MOBILE MENU //
const menuIcon = document.querySelector('.hamburger-menu');
const navlist = document.querySelector('.nav-list');

menuIcon.addEventListener("click", () => {

  menuIcon.classList.toggle('change');
  navlist.classList.toggle('slide-menu');
  
});

function myFunction(){

  menuIcon.classList.remove('change');
  navlist.classList.remove('slide-menu');
  
}

$(document).ready(function(){
	
	// Sticky Menu
	$(window).scroll(function(){

		if($(this).scrollTop() > 100){
			$('.nav').addClass('sticky');
		}

		else{
			$('.nav').removeClass('sticky');
		}

	});
	
	// Scroll to Top
	$(window).scroll(function(){

		if($(this).scrollTop() > 100){
			$('.scroll-top').fadeIn();
		}

		else{
			$('.scroll-top').fadeOut();
		}

	});

  //Latest Project Slider 
	var partialView = $('#partial-view').partialViewSlider({

  // 50%
  width: 50,

  // shows controls
  controls: true,

  // inside, outside, neighbors
  controlsPosition: 'inside', 

  // shows background
  backdrop: true,

  // shows pagination dots
  dots: false,

  // enable autoplay
  auto: true,

  // transition speed in ms
  transitionSpeed: 500,

  // autoplay delay in ms
  delay: 3000,

  // enable pause on hover
  pauseOnHover: false,

  // enable keyboard interactions
  keyboard: true,

  // enable perspective mode
  perspective: false,

  // custom next/prev arrows
  prevHtml: '<i class="icon-arrow-circle-left-solid"></i>',
  nextHtml: '<i class="icon-arrow-circle-right-solid"></i>'

  
});


});