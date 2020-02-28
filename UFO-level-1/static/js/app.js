// from data.js
var tableData = data;

// YOUR CODE HERE!

var filterBtn = d3.select("#filter-btn");
var datetime = d3.select("#datetime");
var inputDatetime = "1/11/2010"

// Click handler
filterBtn.on("click", function() {
  var printRow = false;
  var row
  var cell
  tbody.selectAll('tr').data(data).remove()
  data.forEach((data) => {
    Object.entries(data).forEach(([key, value]) => {
      if (key === "datetime") {
        if (value === inputDatetime) {
          printRow = true; 
          clearTable = false; 
          row = tbody.append("tr");
          cell = row.append("td");
          cell.text(value);
        } else {
          printRow = false;
        }
      } else {
        if (printRow === true) {
          cell = row.append("td");
          cell.text(value);
        }
      }
    });
  });
  if (clearTable === true) {
    tbody.selectAll('tr').data(data).remove()
  }
});

datetime.on("change", function() {
  inputDatetime = d3.event.target.value;
});

// Get a reference to the table body
var tbody = d3.select("tbody");
var clearTable = true;

