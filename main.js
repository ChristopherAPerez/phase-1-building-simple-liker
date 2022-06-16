// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  let modal = document.getElementById('modal')
  modal.classList.add("hidden")
  let heartsGlyph = document.querySelectorAll(".like-glyph")
  for(let i = 0; i < heartsGlyph.length; i++){
    heartsGlyph[i].addEventListener('click', function(e){
      e.defaultPrevented
      mimicServerCall()
      .then(function(){
        if(e.target.innerText === FULL_HEART){
          e.target.classList.remove("activated_heart")
          return e.target.innerText = EMPTY_HEART
        } else if(e.target.innerText === EMPTY_HEART)
          e.target.classList.add("activated_heart")
          return e.target.innerText = FULL_HEART
      })
      .catch(function(){
        modal.classList.remove("hidden")
        setTimeout(() => modal.classList.add("hidden"), 3000)
      })
    })
  }
})

///////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
