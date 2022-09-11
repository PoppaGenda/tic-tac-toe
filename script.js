
let gbarray = [
  document.getElementById("c1"),
  document.getElementById("c2"),
  document.getElementById("c3"),
  document.getElementById("c4"),
  document.getElementById("c5"),
  document.getElementById("c6"),
  document.getElementById("c7"),
  document.getElementById("c8"),
  document.getElementById("c9"),
];
function disable(){
cells.forEach((cell)=>cell.removeEventListener('click',null))
}
function playAgain(){
  
  for (let i = 0; i < gbarray.length; i++) {
    gbarray[i].textContent=" ";
  }
  document.getElementById('pc2').textContent="";
  count=1;
  document.getElementById('pc1').textContent="Player X turn";
  
  
}


function check(cell) {
  console.log(gbarray[1]);
  const cont = document.getElementById("pc2");
  if (
    (gbarray[0].textContent == "X" &&
      gbarray[1].textContent == "X" &&
      gbarray[2].textContent == "X") ||
    (gbarray[3].textContent == "X" &&
      gbarray[4].textContent == "X" &&
      gbarray[5].textContent == "X") ||
    (gbarray[6].textContent == "X" &&
      gbarray[7].textContent == "X" &&
      gbarray[8].textContent == "X") ||
    (gbarray[0].textContent == "X" &&
      gbarray[3].textContent == "X" &&
      gbarray[6].textContent == "X") ||
    (gbarray[1].textContent == "X" &&
      gbarray[4].textContent == "X" &&
      gbarray[7].textContent == "X") ||
    (gbarray[2].textContent == "X" &&
      gbarray[5].textContent == "X" &&
      gbarray[8].textContent == "X") ||
    (gbarray[0].textContent == "X" &&
      gbarray[4].textContent == "X" &&
      gbarray[8].textContent == "X") ||
    (gbarray[2].textContent == "X" &&
      gbarray[4].textContent == "X" &&
      gbarray[6].textContent == "X")
  ) {
    cont.textContent = "X is the Winner";
    disable();
  } else if (
    (gbarray[0].textContent == "O" &&
      gbarray[1].textContent == "O" &&
      gbarray[2].textContent == "O") ||
    (gbarray[3].textContent == "O" &&
      gbarray[4].textContent == "O" &&
      gbarray[5].textContent == "O") ||
    (gbarray[6].textContent == "O" &&
      gbarray[7].textContent == "O" &&
      gbarray[8].textContent == "O") ||
    (gbarray[0].textContent == "O" &&
      gbarray[3].textContent == "O" &&
      gbarray[6].textContent == "O") ||
    (gbarray[1].textContent == "O" &&
      gbarray[4].textContent == "O" &&
      gbarray[7].textContent == "O") ||
    (gbarray[2].textContent == "O" &&
      gbarray[5].textContent == "O" &&
      gbarray[8].textContent == "O") ||
    (gbarray[0].textContent == "O" &&
      gbarray[4].textContent == "O" &&
      gbarray[8].textContent == "O") ||
    (gbarray[2].textContent == "O" &&
      gbarray[4].textContent == "O" &&
      gbarray[6].textContent == "O")
  ) {
    cont.textContent = "O is the Winner";
    disable();
  } else if (
   (gbarray[0].textContent == "X" ||
    gbarray[0].textContent == "O") && (gbarray[1].textContent == "X" ||
    gbarray[1].textContent == "O") && (gbarray[2].textContent == "X" ||
    gbarray[2].textContent == "O") && (gbarray[3].textContent == "X" ||
    gbarray[3].textContent == "O") && (gbarray[4].textContent == "X" ||
    gbarray[4].textContent == "O") && (gbarray[5].textContent == "X" ||
    gbarray[5].textContent == "O") && (gbarray[6].textContent == "X" ||
    gbarray[6].textContent == "O") && (gbarray[7].textContent == "X" ||
    gbarray[7].textContent == "O") && (gbarray[8].textContent == "X" ||
    gbarray[8].textContent == "O")
  ) {
    cont.textContent = "It's a tie";
    disable();
  } else {
    cont.textContent = " ";
  }
}


let count = 1;
function display(cell) {
  let cont = document.getElementById("pc1");

  if (count % 2 == 0) {
    const cells = document.getElementById(cell.id);
    cells.textContent = "O";
    cells.style =
      "font-size:100px;color:orange;display:flex;justify-content:center;align-items:center";

    cont.textContent = "Player X turn ";
  } else {
    const cells = document.getElementById(cell.id);
    cells.textContent = "X";
    cells.style =
      "font-size:100px;color:orange;display:flex;justify-content:center;align-items:center";

    cont.textContent = "Player O turn ";
  }

  count++;
  check(cell);
}

const cells = document.querySelectorAll(".cell");

cells.forEach((cell) =>
  cell.addEventListener("click", ()=>
  display(cell)
  ))
const restart=document.querySelector('#restart');
restart.addEventListener('click',()=>playAgain());