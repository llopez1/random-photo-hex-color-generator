// generator function
function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }


// sets background color style
function setBackground() {
    let bgColor = getColor(); 
    document.body.style.background = bgColor; 
}


//pic generator function
function getPhoto(){
    let randomPhoto =  document.querySelector('#photo');
     randomPhoto.src = "https://picsum.photos/500?random=1";
     randomPhoto.style.display
   }


// runs function on click
document.body.onkeyup = function(e) {
    if(e.keyCode == 32){
        getPhoto();
        setBackground();
    }
}

