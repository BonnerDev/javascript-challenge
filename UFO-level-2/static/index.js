//assign data from the data.js to a descriptive variable 
var UFO = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers for clicking the button or pressing the enter key
button.on("click", runEnter);
form.on("submit",runEnter);

//create the table
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the data from data.js
console.log(UFO);
//updating the table
UFO.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Create the function to run the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
    //remove any existing from the list
    d3.select("tbody").html("");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#filter-type");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

    // Print the value to the console
  console.log(inputValue);
//get the value of the input element from the table
  var filteredData = UFO.filter(record => record.datetime === inputValue);
  console.log(filteredData);
//filter on the date time field and append table
  filteredData.forEach((record)=>{
      var tbody = d3.select("tbody");
      var row = tbody.append("tr");
      Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
        });
    });
};

function runcity() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
      //remove any existing from the list
      d3.select("tbody").html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#filter-type");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
      // Print the value to the console
    console.log(inputValue);
  //get the value of the input element from the table
    var filteredcity = UFO.filter(cities => cities.city === inputValue);
    console.log(filteredcity);
  //filter on the date time field and append table
    filteredcity.forEach((cities)=>{
        var tbody = d3.select("tbody");
        var row = tbody.append("tr");
        Object.entries(cities).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
          });
      });
  };