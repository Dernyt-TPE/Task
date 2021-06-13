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


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
} 
  

  