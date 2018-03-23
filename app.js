let list = ['face', 'face', 'wb_sunny', 'wb_sunny', 'beach_access', 'beach_access', 'star_border', 'star_border', 'filter_hdr', 'filter_hdr', 'local_florist', 'local_florist', 'flash_on', 'flash_on', 'palette', 'palette'];
const tile = document.getElementsByClassName('square');
const gameBoard = document.getElementById('game-board');

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
shuffle(list);

for (var i = 0; i < list.length; i++) {
  let $square = document.createElement('div');
  $square.classList.add('square');
  let $tile = document.createElement('i');
  $tile.classList.add('material-icons');
  $tile.innerHTML = list[i];
  $square.append($tile);
  gameBoard.append($square);
  // console.log($tile);
}


document.addEventListener('click', function(e) {
  if ( e.target.classList.contains('square') ) {
    console.log('clicked!');
  };
}, false);
