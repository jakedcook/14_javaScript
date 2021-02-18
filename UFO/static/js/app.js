// from data.js
var tableData = data;


// create variables for each piece of the table, user input, and our filter button
var table = d3.select('table');
var tbody = d3.select('tbody');
var button = d3.select('button');
var input = d3.select('input');

//create function for when filter button is pressed and that handles the date filter 
function handleClick(){
    d3.event.preventDefault();

//handle date time iput here 
    var date = d3.select('.datetime').property('value');
    
    if (date) {
        tableData = tableData.filter((row) => row.datetime === date);
    };
    buildTable(tableData);
};





//create function that then takes in the date and filters through the data for instances of that date 
//and appends the data to a table 
function buildTable(data){
    tbody.html('');

    //getting the table itself 
    data.forEach(infoRow => {
        var row = tbody.append('tr');

        //getting the values from the objects 
        Object.values(infoRow).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        })
    });



};


//turn button on and call function 
//then call the builTable funciton 
button.on('click', handleClick);
buildTable(tableData);


//what helped me write this was kinda break down the steps of how the page runs and build on that in order so
//I came up with -- inputed date> button> filter through data for inputed date> build table and append!



