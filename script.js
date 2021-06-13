//Side NavBar Collapse

var ele = document.getElementById("togglebtn");
  ele.addEventListener("click", function(){
    //arrow icon
    ele.classList.toggle("rotate");

    //sidebar toggle
    let element = document.getElementById("sidebar");
    
    if (element.classList) {
      element.classList.toggle("active");
    } else {

      // For IE9
      var classes = element.className.split(" ");
      var i = classes.indexOf("active");
    
      if (i >= 0)
        classes.splice(i, 1);
      else
        classes.push("active");
        element.className = classes.join(" ");
    } 
    
  })


// let thumb_slide = document.getElementById("myRange");
// thumb_slide.addEventListener("input", function(e){
//   console.log("sh");
// })

  
const range = document.getElementById('myRange');
const rangeV = document.getElementById('range-value');
let a = 0;
  setValue = ()=>{
    newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);