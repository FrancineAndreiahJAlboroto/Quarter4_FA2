function generateTable() {
  var start = parseInt(document.getElementById("startValue").value);
  var end = parseInt(document.getElementById("endValue").value);
  var outputDiv = document.getElementById("output");

  outputDiv.innerHTML = "";

  if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
    alert("Please enter numbers between 2 and 10");
    return;
  }

  for (var i = 1; i <= start; i++) {
    for (var j = 1; j <= end; j++) {
      outputDiv.innerHTML += (i * j) + " ";
    }
    outputDiv.innerHTML += "<br>";
  }
}
