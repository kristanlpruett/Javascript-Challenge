// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn")
var dateFilter = d3.select("#datetime")

button.on("click", runFilter);

tableData.forEach(function(listData) {
    var row = tbody.append("tr");
    Object.entries(listData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value)
    });
})

function runFilter() {
    // d3.event.preventDefault()

    var dateValue = dateFilter.property("value")
    console.log(dateValue)

    var filterData = []
    var filterData = tableData.filter(date => date.datetime == dateValue);

    d3.selectAll('td').remove();

    filterData.forEach(function(filterData) {
        var row = tbody.append("tr");
        Object.entries(filterData).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value)
        });
    })
    console.log(filterData)
    
}



// id="#filter-btn"