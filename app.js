let list = ['face', 'face', 'wb_sunny', 'wb_sunny', 'beach_access', 'beach_access', 'star_border', 'star_border', 'filter_hdr', 'filter_hdr', 'local_florist', 'local_florist', 'flash_on', 'flash_on', 'palette', 'palette'];
const tile = document.getElementsByClassName('square');
const gameBoard = document.getElementById('game-board');
const timeElapsed = document.getElementById('timer');
const totalMoves = document.getElementById('moves');
const stars = document.getElementById('stars');
const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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

let openCards = [];
let moves = 0;
let timer = 0;
let winState = 0;
document.addEventListener('click', function(e) {
  let selected = e.target;
  if ( e.target.classList.contains('square') ) {
    // console.log(showTile);
    timeElapsed.style.visibility = 'visible';

    let showTile = e.target.firstChild;
    showTile.style.visibility = 'visible';

    openCards.push(selected);
    // console.log(openCards);

    setTimeout(() => {

      if (openCards.length > 1) {

        if (openCards[0].firstChild.innerHTML === openCards[1].firstChild.innerHTML) {
          // console.log('winner!');
          ++winState;
          // console.log('winState =', winState);
          openCards = [];
          if (winState === 8) {
            alert('You Win!!!');
          }
        }
        else {
          openCards[0].firstChild.style.visibility = 'hidden';
          openCards[1].firstChild.style.visibility = 'hidden';
          openCards = [];
        }
        ++moves;
        totalMoves.innerHTML = `Moves: ${moves}`;

        if (moves == 12 ) {
          stars.removeChild(star3);
        } else if (moves == 25) {
          stars.removeChild(star2);
        } else if (moves == 35) {
          stars.removeChild(star1);
        }

      }

    }, 2000);

    // if () {
    //
    // }


  };
}, false);
