// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value").toLowerCase();
    let state = d3.select("#state").property("value").toLowerCase();
    let country = d3.select("#country").property("value").toLowerCase();
    let shape = d3.select("#shape").property("value").toLowerCase();
   
    //Create if statement for date as a filter
    if (date) {
        filters.datetime = date;
    };
    //Create if statement for city as a filter
    if (city) {
        filters.city = city;
    }
    //Create if statement for state as a filter
    if (state) {
        filters.state = state;
    }
    //Create if statement for country as a filter
    if (country) {
        filters.country = country;
    }
    //Create if statement for shape as a filter
    if (shape) {
        filters.shape = shape;
    }
 
    

   
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(
        ([key, value]) => {
            if (key,value) {
                filteredData = filteredData.filter(row => row[key] === value);
            }
        }
    )
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
