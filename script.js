
//Programming Question button actions
function overProgramBtn(){
    let programPopup = document.getElementById("programPopup");
    programPopup.classList.toggle("show");
}

function outProgramBtn(){
    let programPopup = document.getElementById("programPopup");
    programPopup.classList.toggle("hide");
}

function directProgramPg(){
    location.href = "programming.html";
}

let programBtn = document.querySelector(".programbtn");
programBtn.addEventListener("click", directProgramPg);
//End of Programming Question button actions


//DSA button actions
function overDsaBtn(){
    let dsaPopup = document.getElementById("dsaPopup");
    dsaPopup.classList.toggle("show");
}

function outDSABtn(){
    let dsaPopup = document.getElementById("dsaPopup");
    dsaPopup.classList.toggle("hide");
}

function directDsaPg(){
    location.href = "dsa.html";
}


let dsaBtn = document.querySelector(".dsabtn");
dsaBtn.addEventListener("click", directDsaPg);

//End of DSA button actions


//Servlet JSP button actions
function overSrvJSPBtn(){
    let srvJSPPopup = document.getElementById("SrvJSPPopup");
    srvJSPPopup.classList.toggle("show");
}

function outSrvJSPBtn(){
    let srvJSPPopup = document.getElementById("SrvJSPPopup");
    srvJSPPopup.classList.toggle("hide");
}

function directSrvJSPPg(){
    location.href = "srvjsp.html";
}


let srvJspBtn = document.querySelector(".SrvJSPbtn");
srvJspBtn.addEventListener("click", directSrvJSPPg);
//End of Servlet JSP button actions



/*achivements.html*/
// var slideIndex = 1;
// showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// End of achivements.html


// index.html
// consoleText(['Hello World.', 'Console Text', 'Made with Love.'], 'titleText',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 100)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}