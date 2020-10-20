const cells = Array.from(document.querySelectorAll(".cell"));
let xSpots = [];
let oSpots = [];

gameStart();

function gameStart() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "") {
      cells[i].addEventListener("mouseenter", grayX);

      cells[i].addEventListener("mouseleave", empty);

      cells[i].addEventListener("click", populateXspots);

      cells[i].addEventListener("click", function () {
        this.removeEventListener("mouseenter", grayX);
        this.removeEventListener("mouseleave", empty);
        this.innerHTML = '<div class="x">+</div>';
        oMove();
      });
    }
  }
}

function grayX() {
  this.innerHTML = '<div class="xgray">+</div>';
}
function empty() {
  this.innerHTML = "";
}
function grayO() {
  this.innerHTML = '<div class="ogray">〇</div>';
}
function populateXspots() {
  xSpots.push(this.dataset.cell);
  console.log(xSpots);
}
function populateOspots() {
  oSpots.push(this.dataset.cell);
  console.log(oSpots);
}

function oMove() {
  checkX();

  for (let j = 0; j < cells.length; j++) {
    if (cells[j].innerHTML == "") {
      cells[j].removeEventListener("mouseenter", grayX);
      cells[j].addEventListener("mouseenter", grayO);

      cells[j].removeEventListener("click", populateXspots);
      cells[j].addEventListener("click", populateOspots);

      cells[j].addEventListener("click", function () {
        this.removeEventListener("mouseenter", grayO);
        this.removeEventListener("mouseleave", empty);
        this.innerHTML = '<div class="o">〇</div>';
        xMove();
      });
    }
  }
}

function xMove() {
  checkO();

  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML == "") {
      cells[i].removeEventListener("mouseenter", grayO);
      cells[i].addEventListener("mouseenter", grayX);

      cells[i].removeEventListener("click", populateOspots);
      cells[i].addEventListener("click", populateXspots);

      cells[i].addEventListener("click", function () {
        this.removeEventListener("mouseenter", grayX);
        this.removeEventListener("mouseleave", empty);
        this.innerHTML = '<div class="x">+</div>';
        oMove();
      });
    }
  }
}

let winnings = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["1", "5", "9"],
  ["3", "5", "7"],
];

function checkX() {
  for (let i = 0; i < winnings.length; i++) {
    if (
      xSpots.includes(winnings[i][0]) == true &&
      xSpots.includes(winnings[i][1]) == true &&
      xSpots.includes(winnings[i][2]) == true
    ) {
      alert("X WINS!");
      if (confirm("X WINS!")) {
        window.location.reload();
      }
    } else continue;
  }

  if (xSpots.length == 5) {
    alert("NO ONE WINS!");
    if (confirm("NO ONE WINS!")) {
      window.location.reload();
    }
  }
}

function checkO() {
  for (let i = 0; i < winnings.length; i++) {
    if (
      oSpots.includes(winnings[i][0]) == true &&
      oSpots.includes(winnings[i][1]) == true &&
      oSpots.includes(winnings[i][2]) == true
    ) {
      alert("O WINS!");
      if (confirm("O WINS!")) {
        window.location.reload();
      }
    } else continue;
  }
}
