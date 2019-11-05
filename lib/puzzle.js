const hintButton = document.getElementById('show-hint');

hintButton.addEventListener('contextmenu',(event)=>{
  console.log(event);
  const hint = document.querySelector('.hint')
  hint.classList.toggle('active');
});

const tiles = document.querySelectorAll('#grid td');

tiles.forEach((tile)=>{
  tile.addEventListener('click',(event)=>{
    // console.log(event.currentTarget);
    if (canMove(tile)) {
      move(tile);
      checkWin();
    }
  });
});


const checkWin = () => {
  const order = Array.from(document.querySelectorAll('td')).map((td)=>{ return parseInt(td.innerText,10)}).join('');

  if(order === "123456789101112131415NaN") {
    document.querySelector('h1').style.display = '';
  }
}

const canMove = (tile) => {
  const tileCol = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyCol = emptyTile.cellIndex;
  const emptyRow = emptyTile.parentElement.rowIndex;

  // console.log(`tile col=${tileCol} row=${tileRow}`);
  // console.log(`empty col=${emptyCol} row=${emptyRow}`);

  return (tileCol == emptyCol && tileRow == emptyRow - 1) ||
         (tileCol == emptyCol && tileRow == emptyRow + 1) ||
         (tileRow == emptyRow && tileCol == emptyCol - 1) ||
         (tileRow == emptyRow && tileCol == emptyCol + 1);
}

const move = (tile) => {
  const empty = document.querySelector('.empty');
  empty.classList.remove('empty');
  empty.innerText = tile.innerText;
  tile.innerText = '';
  tile.classList.add('empty');
}

