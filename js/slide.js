let slides = document.getElementById('slider').children;
let offset = -100;
let step = 1;
let Interval;
let sliderSpeed = 3;
let parent = document.getElementById('slider');
let numLastChild = slides.length-1;
let slideResolution = true;

function createClones(){
  let clone = slides[0].cloneNode(true);

  parent.appendChild(clone);
  clone = slides[numLastChild].cloneNode(true);
  parent.appendChild(clone);
  parent.insertBefore(clone, parent.firstChild);
  slides = document.getElementById('slider').children;
}

function createDots(){
  let newDiv = document.createElement("div");

  newDiv.classList.add('dots')
  parent.parentNode.append(newDiv)
  for (var i = 0; i < slides.length - 2; i++) {
      var p = document.createElement("li");
      p.id = `li${i}`;
      p.addEventListener("click", goToNumSlide);
      newDiv.appendChild(p);
  }
}

function highlightActiveDot(){
  let currStep = step < 1? slides.length -2 : step > slides.length -2 ? 1 : step;

  for (var i = 0; i < slides.length - 2; i++) {
    if(currStep == i+1){
      document.getElementById(`li${i}`).classList.add('_active');
    } else {
       document.getElementById(`li${i}`).classList.remove('_active');
    }
  }
}


function goToNumSlide(){
  if(slideResolution){
    slideResolution = false;
    let num = +this.id.slice(2);
    step = step < 1? slides.length -2 : step > slides.length -2 ? 1 : step;
    offset = (step)*-100
    if (step < num + 1){
      step = num + 1;
      Interval = setInterval(calcOffsetRight, sliderSpeed);
    } else if(step > num + 1){
      step = num + 1;
      Interval = setInterval(calcOffsetLeft, sliderSpeed);
    } else{
      slideResolution = true;
    }
  }
}

function initialization(){
  createClones()
  createDots()
  highlightActiveDot()
  displace(-100);
  document.getElementById('buttonRight').onclick = right;
  document.getElementById('buttonLeft').onclick = left;
}

function displace(percetn){
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.left = `${percetn}%`
  }
  highlightActiveDot()
}

initialization()

function right(){
  if(slideResolution){
    document.getElementById('buttonRight').onclick = null;
    if(step > slides.length - 2){
      step = 1;
      offset = (step)*-100
      displace(offset)
    }
    step++
    Interval = setInterval(calcOffsetRight, sliderSpeed);
  }
}

function left(){
  if(slideResolution){
    document.getElementById('buttonLeft').onclick = null;
    if(step < 1){
      step = slides.length - 2;
      offset = (step)*-100
      displace(offset)
    }
    step--
    Interval = setInterval(calcOffsetLeft, sliderSpeed);
  }
}

function calcOffsetRight(){
  console.log(step)
  if(offset > -100*(step)){
    offset--;
    displace(offset);
  } else {
    clearInterval(Interval)
    document.getElementById('buttonRight').onclick = right;
    slideResolution = true;
  }
}

function calcOffsetLeft(){
  console.log(step)
  if(offset < -100*step){
    offset++;
    displace(offset);
  } else {
    clearInterval(Interval)
    document.getElementById('buttonLeft').onclick = left;
    slideResolution = true;
  }
}

