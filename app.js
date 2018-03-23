const tile = document.getElementsByClassName('square');

document.addEventListener('click', function(e) {
  if ( e.target.classList.contains('square') ) {
    console.log('clicked!');
  };
}, false)
