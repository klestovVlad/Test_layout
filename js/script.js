
//change glow when the document gets smaller
let glowOpacity = document.getElementById('main__glow__path')

function changeSvgOpacity() {
  let width = document.body.clientWidth;
  let coefficient = (1980/width) * 0.2;

  coefficient = coefficient > 0.5 ? 0.5 : coefficient;
  glowOpacity.style.fill = `rgba(250,0,255,${coefficient})`
}

changeSvgOpacity()

window.addEventListener('resize', function(){
  changeSvgOpacity()
});

function highlightIfInputNotValid(idForm){
  let elChild = document.querySelector("#section10_form").children
  for (var i = 0; i < elChild.length; i++) {
    elChild[i].classList.add("chek-valid"); //second console output
  }
}

//cookies-notice
let cookies_notice = document.getElementById('cookies_notice')
setTimeout(()=>{
  cookies_notice.classList.add('_active');
},2000)

function hideCookiesNotice() {
  cookies_notice.classList.remove('_active');
  document.querySelector('.back-to-top').style.bottom = '60px'
}



//scrol up
goTopBtn = document.querySelector('.back-to-top')

function showScrollButtn() {
  let scrolled = window.pageYOffset;
  let clientHeight = document.documentElement.clientHeight;

  if (scrolled > clientHeight) {
    goTopBtn.classList.add('_visible');
  }
  if (scrolled < clientHeight) {
    goTopBtn.classList.remove('_visible');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(backToTop, 0);
  }
}

window.addEventListener('scroll', showScrollButtn);