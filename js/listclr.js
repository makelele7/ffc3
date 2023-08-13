const list = document.getElementById("latest-matches");
const rows = list.getElementsByTagName("ul");

for (var i = 0; i < rows.length; i++) {
  var cells = rows[i].getElementsByTagName("li");
  var result = cells[6].textContent.trim();

  if (result === "win") {
    cells[5].classList.add("win-text");
  } else if (result === "lose") {
    cells[5].classList.add("lose-text");
  } else if (result === "draw") {
    cells[5].classList.add("draw-text");
  }
}