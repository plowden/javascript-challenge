// from data.js
var tableData = data;

// Click handler
function filter(opt, val) {
  console.log("function start val and opt: ", val, " ", opt);
  var printRow = false;
  var row
  var cell
  var cells = [];
  tbody.selectAll('tr').data(data).remove()
  data.forEach((data) => {
    Object.entries(data).forEach(([key, value]) => {
      console.log("function key and value: ", key, " ", value);
      cells.push(value);
      if (key === opt) {
        if (value === val) {
          printRow = true; 
          console.log("function set printRow to true");
        }
      }
      if (key === "comments") {
        if (printRow === true) {
          console.log("function print cells: ", cells);
          row = tbody.append("tr");
          cells.forEach(function(text) {
            cell = row.append("td");
            cell.text(text);
            console.log("function print: ", text);
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
console.log("Datetime:" , datetimeList);

var valuesCity = data.map(function(data) {
  return data.city;
});
citySet = new Set(valuesCity.sort());
cityList = [];
cityList.push("");
for (let item of citySet) cityList.push(item);
console.log("Cities:" , cityList);

var valuesState = data.map(function(data) {
  return data.state;
});
stateSet = new Set(valuesState.sort());
stateList = [];
stateList.push("");
for (let item of stateSet) stateList.push(item);
console.log("States:" , stateList);

var valuesCountry = data.map(function(data) {
  return data.country;
});
countrySet = new Set(valuesCountry.sort());
countryList = [];
countryList.push("");
for (let item of countrySet) countryList.push(item);
console.log("Countries:" , countryList);

var valuesShape = data.map(function(data) {
  return data.shape;
});
shapeSet = new Set(valuesShape.sort());
shapeList = [];
shapeList.push("");
for (let item of shapeSet) shapeList.push(item);
console.log("Shapes:" , shapeList);


var option = "";
var value = "";
var dropdownDatetime = d3.select("#dropdown-datetime");
var dropdownDatetimeOptions = dropdownDatetime.selectAll("option").data(datetimeList).enter().append("option").text(function(d) {return d});
dropdownDatetime.on("change", function() {
  //var dropdownDatetimeOptions = d3.event.target.value;
  option = "datetime";
  value = d3.event.target.value;
  filter(option, value);
  //dropdownDatetime.html("");
  document.getElementById("dropdown-datetime").value = "";
  console.log("dropdownDatetime value and option: ", value, " ", option);
});

var dropdownCity = d3.select("#dropdown-city");
var dropdownCityOptions = dropdownCity.selectAll("option").data(cityList).enter().append("option").text(function(d) {return d});
dropdownCity.on("change", function() {
  //var dropdownCityOptions = d3.event.target.value;
  option = "city";
  value = d3.event.target.value;
  filter(option, value);
  //dropdownCity.html("");
  document.getElementById("dropdown-city").value = "";
  console.log("dropdownCity value and option: ", value, " ", option);
});

var dropdownState = d3.select("#dropdown-state");
var dropdownStateOptions = dropdownState.selectAll("option").data(stateList).enter().append("option").text(function(d) {return d});
dropdownState.on("change", function() {
  //var dropdownStateOptions = d3.event.target.value;
  option = "state";
  value = d3.event.target.value;
  filter(option, value);
  //dropdownState.html("");
  document.getElementById("dropdown-state").value = "";
  console.log("dropdownState value and option: ", value, " ", option);
});

var dropdownCountry = d3.select("#dropdown-country");
var dropdownCountryOptions = dropdownCountry.selectAll("option").data(countryList).enter().append("option").text(function(d) {return d});
dropdownCountry.on("change", function() {
  //var dropdownCountryOptions = d3.event.target.value;
  option = "country";
  value = d3.event.target.value;
  filter(option, value);
  //dropdownCountry.html("");
  document.getElementById("dropdown-country").value = "";
  console.log("dropdownCountry value and option: ", value, " ", option);
});

var dropdownShape = d3.select("#dropdown-shape");
var dropdownShapeOptions = dropdownShape.selectAll("option").data(shapeList).enter().append("option").text(function(d) {return d});
dropdownShape.on("change", function() {
  //var dropdownShapeOptions = d3.event.target.value;
  option = "shape";
  value = d3.event.target.value;
  filter(option, value);
  //dropdownShape.html("");
  document.getElementById("dropdown-shape").value = "";
  console.log("dropdownShape value and option: ", value, " ", option);
});


