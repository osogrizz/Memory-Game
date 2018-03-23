const tile = document.getElementsByClassName('square');

for (var i = 0; i < tile.length; i++) {
  tile[i].addEventListener('click', (e) => {
    console.log('clicked!');
  });
};
