// Import the data from data.js
const tableData = data;

//Referencce the HTML table using d3
var tbody = d3.select("tbody");

//Simple example function
// function printHello(name) {
//     console.log("Hello" + name);
// }

// Build the function to add UFO sightings to a table
function buildTable(data) {
    //Clear the existing data and filters
    tbody.html("");

    //Loop through each object in the data
    // and append a row and cells for each value
    data.forEach((dataRow) => {
       let row = tbody.append("tr");

       // Loop through each field in the dataRow and add
       // each value as a table cell (td)
       Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
       ); 
    });
}

