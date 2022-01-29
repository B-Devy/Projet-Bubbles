var body = document.querySelector('body');
var bouton = document.querySelector('button');
var creation = document.createElement('p');
var num = 0;
var bulle = document.createElement('div');

/*function comptage() { 
    bulle.style.bottom = i + "px"; 
    return i++;
 }*/

bouton.addEventListener('click', () => {

    
    body.appendChild(bulle);
    bulle.classList.add('bulle');
    bulle.style.bottom = i + "px"; 
/*
    for (var i = 0; i < 1500; i++) {
        bulle.style.bottom = i + "px"; 
    }*/
    
    function myMove() {
        let id = null;
      
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++; 
            bulle.style.top = pos + "px"; 
            bulle.style.left = pos + "px"; 
          }
        }
      }


    /*
    for (var i = 0; i < 1500; i ++) {
        i++;
    }
    */
    
});





