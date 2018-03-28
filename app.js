const tile = document.getElementsByClassName('square');
const gameBoard = document.getElementById('game-board');
const restart = document.getElementById('restart-btn');
const timeElapsed = document.getElementById('timer');
const totalMoves = document.getElementById('moves');
const stars = document.getElementById('stars');
const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const modal = document.getElementById('modal-container');
const totalTime = document.getElementById('total-time');
const totalMovesModal = document.getElementById('total-moves');
const starRating = document.getElementById('star-rating');

let openCards = [];
let moves = 0;
let timer = 0;
let winState = 0;

let initMin = 0;
let initSec = 0;

let list = ['face', 'face',
            'wb_sunny', 'wb_sunny',
            'beach_access', 'beach_access',
            'star_border', 'star_border',
            'filter_hdr', 'filter_hdr',
            'local_florist', 'local_florist',
            'flash_on', 'flash_on',
             'palette', 'palette'
           ];


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

function setCards() {
  for (var i = 0; i < list.length; i++) {
    let $flipContainer = document.createElement('div');
    $flipContainer.classList.add('flip-container');
    let $square = document.createElement('div');
    $square.classList.add('square', 'flip');
    let $frontTile = document.createElement('div');
    $frontTile.classList.add('front');
    let $tile = document.createElement('i');
    $tile.classList.add('material-icons', 'back');
    $tile.innerHTML = list[i];
    $flipContainer.append($square);
    $square.append($frontTile);
    $square.append($tile);
    gameBoard.append($flipContainer);
  };
};
setCards();



document.addEventListener('click', function(e) {
  ++timer;

  let selected = e.target;
  if ( e.target.classList.contains('square') ) {
    timeElapsed.style.visibility = 'visible';

    let showTile = e.target.firstChild;
    showTile.parentNode.classList.add('active');
    showTile.parentNode.parentNode.classList.add('active');
    openCards.push(selected);
  }
  cardHandler();
}, false);

function startTime() {
  if (timer === 1) {
     timeInterval = setInterval(function() { timeHandler() },1000);
  };
}

function winStateHandler() {
  clearInterval(timeInterval);
  totalTime.innerHTML = `total ${timeElapsed.innerHTML}`;
  totalMovesModal.innerHTML = `total ${totalMoves.innerHTML}`;
  starRating.innerHTML = `star rating: ${stars.innerHTML}`;
  modal.style.display = 'block';
};

function timeHandler() {
  let sec = initSec % 60;
  if (sec < 10) {
    sec = `0${sec}`;
  }
  let min = parseInt(initSec / 60);

  timeElapsed.innerHTML = `time: ${min}:${sec}`;
  initSec += 1;
};

function cardHandler(e) {
  startTime();
  setTimeout(() => {

    if (openCards.length > 1) {
      console.log(openCards);
      if (openCards[0].childNodes[1].innerHTML === openCards[1].childNodes[1].innerHTML) {
        ++winState;
        openCards = [];
        if (winState === 8) {
          winStateHandler();
        };
    } else {
        openCards[0].classList.remove('active');
        openCards[0].parentNode.classList.remove('active');

        openCards[1].classList.remove('active');
        openCards[1].parentNode.classList.remove('active');
        console.log(openCards[0]);
        openCards = [];
      };

      ++moves;
      totalMoves.innerHTML = `Moves: ${moves}`;

      if (moves == 12 ) {
        stars.removeChild(star3);
      } else if (moves == 25) {
        stars.removeChild(star2);
      } else if (moves == 35) {
        stars.removeChild(star1);
      }
    };
  }, 2000);
}
