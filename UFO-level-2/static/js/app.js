// from data.js
var tableData = data;

// Click handler
function filter(opt, val) {
  var printRow = false;
  var row
  var cell
  var cells = [];
  tbody.selectAll('tr').data(data).remove()
  data.forEach((data) => {
    Object.entries(data).forEach(([key, value]) => {
      cells.push(value);
      if (key === opt) {
        if (value === val) {
          printRow = true; 
        }
      }
      if (key === "comments") {
        if (printRow === true) {
          row = tbody.append("tr");
          cells.forEach(function(text) {
            cell = row.append("td");
            cell.text(text);
          });
          cells.length = 0;
        } else {
          cells.length = 0;
        }
        printRow = false; 
      }
    });
  });
}


// Get a reference to the table body
var tbody = d3.select("tbody");

var valuesDatetime = data.map(function(data) {
  return data.datetime;
});
datetimeSet = new Set(valuesDatetime.sort());
datetimeList = [];
datetimeList.push("");
for (let item of datetimeSet) datetimeList.push(item);

var valuesCity = data.map(function(data) {
  return data.city;
});
citySet = new Set(valuesCity.sort());
cityList = [];
cityList.push("");
for (let item of citySet) cityList.push(item);

var valuesState = data.map(function(data) {
  return data.state;
});
stateSet = new Set(valuesState.sort());
stateList = [];
stateList.push("");
for (let item of stateSet) stateList.push(item);

var valuesCountry = data.map(function(data) {
  return data.country;
});
countrySet = new Set(valuesCountry.sort());
countryList = [];
countryList.push("");
for (let item of countrySet) countryList.push(item);

var valuesShape = data.map(function(data) {
  return data.shape;
});
shapeSet = new Set(valuesShape.sort());
shapeList = [];
shapeList.push("");
for (let item of shapeSet) shapeList.push(item);


var option = "";
var value = "";
var dropdownDatetime = d3.select("#dropdown-datetime");
var dropdownDatetimeOptions = dropdownDatetime.selectAll("option").data(datetimeList).enter().append("option").text(function(d) {return d});
dropdownDatetime.on("change", function() {
  option = "datetime";
  value = d3.event.target.value;
  filter(option, value);
  document.getElementById("dropdown-datetime").value = "";
});

var dropdownCity = d3.select("#dropdown-city");
var dropdownCityOptions = dropdownCity.selectAll("option").data(cityList).enter().append("option").text(function(d) {return d});
dropdownCity.on("change", function() {
  option = "city";
  value = d3.event.target.value;
  filter(option, value);
  document.getElementById("dropdown-city").value = "";
});

var dropdownState = d3.select("#dropdown-state");
var dropdownStateOptions = dropdownState.selectAll("option").data(stateList).enter().append("option").text(function(d) {return d});
dropdownState.on("change", function() {
  option = "state";
  value = d3.event.target.value;
  filter(option, value);
  document.getElementById("dropdown-state").value = "";
});

var dropdownCountry = d3.select("#dropdown-country");
var dropdownCountryOptions = dropdownCountry.selectAll("option").data(countryList).enter().append("option").text(function(d) {return d});
dropdownCountry.on("change", function() {
  option = "country";
  value = d3.event.target.value;
  filter(option, value);
  document.getElementById("dropdown-country").value = "";
});

var dropdownShape = d3.select("#dropdown-shape");
var dropdownShapeOptions = dropdownShape.selectAll("option").data(shapeList).enter().append("option").text(function(d) {return d});
dropdownShape.on("change", function() {
  option = "shape";
  value = d3.event.target.value;
  filter(option, value);
  document.getElementById("dropdown-shape").value = "";
});


