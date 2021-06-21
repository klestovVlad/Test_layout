window.onload = function() {
    window.scrollTo(0, 0); // set x and y position to 0 and 0 respectively.
};

//main section

let phoneImg = document.getElementById('mainPhoneImg');
let mainGlow = document.getElementById('main__glow');
let mainSection = document.getElementById('mainSection');

mainSection.addEventListener('mousemove', (event) => {
	percentX = ((event.clientX - mainSection.clientWidth) * 100 / mainSection.clientWidth) + ((event.clientX) * 100 / mainSection.clientWidth);
	percentY = ((event.clientY - mainSection.clientHeight) * 100 / mainSection.clientHeight) + ((event.clientY) * 100 / mainSection.clientHeight);

	//phoneImg.style.transform = 'translate('+percentX/-40+'%, '+percentY/-80+'%)'; 
	mainGlow.style.transform = 'translate('+percentX/-40+'%, '+percentY/-40+'%)'; 
});


//section3
let animItemPoint = window.amim
const partOfScreen = 1/6;
let section3 = document.querySelector('.section3')
let section3Trigger = true;

function offset(el) {
	const rect = el.getBoundingClientRect();
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return rect.top + scrollTop;
}

window.addEventListener('scroll', (event) => {
	if (window.innerWidth > 1215){
		if(window.scrollY < 100){
			section3Trigger = true;
		}
		if(window.scrollY > offset(section3) + section3.scrollHeight*partOfScreen && section3Trigger){
			document.querySelector('.section3__text').classList.add('section3__text_hide');
			document.querySelector('.section3__phone-img').classList.add('section3__phone-img_rotate');
		}
		if(window.scrollY > offset(section3) + section3.scrollHeight){
			section3Trigger = false;
		}
		if((window.scrollY < offset(section3) + section3.scrollHeight*(partOfScreen)) && !section3Trigger){
			document.querySelector('.section3__text').classList.remove('section3__text_hide');
			document.querySelector('.section3__phone-img').classList.remove('section3__phone-img_rotate');
		}
	}
});




//section5
let section5 = document.getElementById('section5');

let sec5_row1  	   = document.getElementById('row1');
let sec5_row2_left   = document.getElementById('row2_left');
let sec5_row3_left   = document.getElementById('row3_left');
let sec5_row3_middle = document.getElementById('row3_middle');
let sec5_row3_right  = document.getElementById('row3_right');
let sec5_row4_left   = document.getElementById('row4_left');
let sec5_row4_right  = document.getElementById('row4_right');

let coordinate = {
	x: 100,
	y:0,
	r:50,
	angle: 0
}

function changeCoordinateOnTime(){
	coordinate.angle = coordinate.angle > 359? 0 : coordinate.angle+0.05;
	coordinate.x = coordinate.r * Math.cos(coordinate.angle)
	coordinate.y = coordinate.r * Math.sin(coordinate.angle)

	sec5_row1.style.transform 			= 'translate('+coordinate.x/-12+'%, '+coordinate.y/-12+'%)'; 
	sec5_row2_left.style.transform 	= 'translate('+coordinate.x/15+'%, '+coordinate.y/5+'%)'; 
	sec5_row3_left.style.transform 	= 'translate('+coordinate.x/-40+'%, '+coordinate.y/-40+'%)'; 
	sec5_row3_middle.style.transform = 'translate('+coordinate.x/-5+'%, '+coordinate.y/-5+'%)'; 
	sec5_row3_right.style.transform 	= 'translate('+coordinate.x/-20+'%, '+coordinate.y/-20+'%)'; 
	sec5_row4_left.style.transform 	= 'translate('+coordinate.x/-20+'%, '+coordinate.y/-20+'%)'; 
	sec5_row4_right.style.transform	= 'translate('+coordinate.x/30+'%, '+coordinate.y/30+'%)'; 
}

setInterval(changeCoordinateOnTime, 30);


//section7

let section7 = document.getElementById('section7');

let sec7_line1_left  = document.getElementById('sec7_line1_left');
let sec7_line1_right = document.getElementById('sec7_line1_right');
let sec7_line2_left  = document.getElementById('sec7_line2_left');
let sec7_line2_right = document.getElementById('sec7_line2_right');

let offcetSec7

window.addEventListener('scroll', (event) => {
	last_known_scroll_position = window.scrollY
	offcetSec7 = (last_known_scroll_position - 5500)/30

	sec7_line1_left.style.width = `${offcetSec7 + 50}%`
	sec7_line1_right.style.width = `${offcetSec7 + 50}%`
	sec7_line2_left.style.width = `${offcetSec7 + 50}%`
	sec7_line2_right.style.width = `${offcetSec7 + 50}%`

});


//section8
let section8 = document.getElementById('section8');

let sec8_p1  = document.getElementById('sec8_p1');
let sec8_p2  = document.getElementById('sec8_p2');
let sec8_p3  = document.getElementById('sec8_p3');
let sec8_p4  = document.getElementById('sec8_p4');

let section8_phone = document.getElementById('section8_phone');

section8.addEventListener('mousemove', (event) => {
	percentX = ((event.clientX - mainSection.clientWidth) * 100 / mainSection.clientWidth) + ((event.clientX) * 100 / mainSection.clientWidth);
	percentY = ((event.clientY - mainSection.clientHeight) * 100 / mainSection.clientHeight) + ((event.clientY) * 100 / mainSection.clientHeight);

	sec8_p1.style.transform = 'translate('+percentX/-10+'%, '+percentY/-10+'%)'; 
	sec8_p2.style.transform = 'translate('+percentX/-20+'%, '+percentY/-20+'%)'; 
	sec8_p3.style.transform = 'translate('+percentX/-10+'%, '+percentY/-10+'%)'; 
	sec8_p4.style.transform = 'translate('+percentX/-20+'%, '+percentY/-20+'%)'; 
	section8_phone.style.transform = 'translate('+percentX/100+'%, '+percentY/100+'%)'; 

});
