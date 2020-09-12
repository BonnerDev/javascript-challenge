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

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

    // Print the value to the console
  console.log(inputValue);
//get the value of the input element from the table
  var filteredData = UFO.filter(record => record.datetime === inputValue);
  console.log(filteredData);
  //select the table by name 
  var list = d3.select("#ufo-table").text(inputValue);
  //remove any children from the list
  list.html("");
  //append filtered data to the list
  list.append("cell").text(filteredData);


}
