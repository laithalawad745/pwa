let mainColors = localStorage.getItem("color_option")



if(mainColors !== null){
document.documentElement.style.setProperty("--main-color",mainColors)


}







let colorList = document.querySelectorAll(".color-list li");

  colorList.forEach((li)=>{
li.addEventListener("click",(e)=>{

document.documentElement.style.setProperty("--main-color",e.target.dataset.color)

localStorage.setItem("color_option", e.target.dataset.color);

})  


})







let bars = document.querySelector(".bars");
let linksMobile = document.querySelector(".links-mobile");
let close = document.querySelector(".close");


bars.onclick = function () {
linksMobile.classList.add("opene");
};
close.onclick = function () {
  linksMobile.classList.remove("opene");
};



let iconSetting = document.querySelector(".icon-setting i");
let setting = document.querySelector(".setting");
let logo = document.querySelector(".logo");



iconSetting.onclick = function () {
  this.classList.toggle("fa-spin")
  setting.classList.toggle("openSetting");
  logo.classList.toggle("logo-close");

}

// *****************************//





let backgroundOption = true ;


let interval 



let backgroundLoc = localStorage.getItem("background_option");

let clic = document.querySelectorAll(".random-background span");

if(backgroundLoc !== null){

  if(backgroundLoc === 'true'){
    backgroundOption =true
  }
  else{
    backgroundOption = false;

  }

clic.forEach((el)=>{
    el.classList.remove("active");
  });

if(backgroundLoc === 'true')
  document.querySelector(".random-background .yes").classList.add("active")
else
  document.querySelector(".random-background .no").classList.add("active");


}



clic.forEach((el)=>{
el.addEventListener("click",(e)=>{
  clic.forEach((le) => {
    le.classList.remove("active");
  });

  el.classList.add("active");

  if (e.target.dataset.bac === "yes") {
    backgroundOption = true
    randomizeImgs();
    localStorage.setItem("background_option",backgroundOption)
    
  } else {
    backgroundOption = false;
    clearInterval(interval)
    localStorage.setItem("background_option", backgroundOption);


  }
})

  
})



let page = document.querySelector(".page");
let imgArray = ["1.jfif","2.jfif","3.jfif","4.jfif","5.jfif","6.jfif","7.jfif","8.jfif","9.jfif","10.jfif","11.jfif","12.jfif"]


function randomizeImgs () {
if(backgroundOption === true){

interval = setInterval( () =>{
let randomNum = Math.floor(Math.random()* imgArray.length)
page.style.backgroundImage = 'url("image/'+imgArray[randomNum]+'")'

},6000)

}


}





randomizeImgs()

// Start Skills 




let ourSkills = document.querySelector(".skills");
let progressSpans = document.querySelectorAll(".skills-progress span");

window.onscroll = ()=> {
if(window.scrollY >= ourSkills.offsetTop - 300){
  progressSpans.forEach(sp=>{
    sp.style.width = sp.dataset.progress;
  })
}

}



// End Skills 



let ourGallery = document.querySelectorAll(".gallery img")


ourGallery.forEach(img => {
img.addEventListener("click",(e)=>{
  let overlay = document.createElement("div")

  overlay.className= 'popup-overlay'

  document.body.appendChild(overlay)


  let popupBox = document.createElement("div")

  popupBox.className = "popup-box"

 if(img.alt !== null){
    
    let imgHeading = document.createElement("h3")

    let imgText = document.createTextNode(img.alt)


    imgHeading.appendChild(imgText)

    popupBox.appendChild(imgHeading)

  }

  let popupImg = document.createElement("img")


  popupImg.src = img.src

  popupBox.appendChild(popupImg)

  document.body.appendChild(popupBox)



  let closeButton = document.createElement("span")

  let closeButtonText = document.createTextNode("X")

  closeButton.appendChild(closeButtonText)

  closeButton.className = "close-button"

  popupBox.appendChild(closeButton)


  document.addEventListener("click",(e)=>{
if(e.target.className == 'close-button'){
  e.target.parentNode.remove()

  document.querySelector(".popup-overlay").remove();
}


})


})


})

let allBullets = document.querySelectorAll(".nav-pullets .bullet");



let allLink = document.querySelectorAll(".links a");

let allLinkmob = document.querySelectorAll(".links-mobile a");


function scrollToSom (elements){

  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

scrollToSom(allBullets);
scrollToSom(allLink);
scrollToSom(allLinkmob);












