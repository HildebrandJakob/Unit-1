// Stylesheet by Jacob E. Hildebrand, 2020
//initialize function called when script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
function cities(){
    var cities = [
        'Madison',
        'Milwaukee',
        'Green Bay',
        'Superior'
    ];
    var population = [
        233209,
        594833,
        104057,
        27244
    ];

    //create a table element
    var table = document.createElement("table");

    //create a header row

    var headerRow = document.createElement("tr");

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};
//debugCallback function is primarily for just making sure the GeoJSON labels itself
//in the div and below the cities table.
//mydata is the only variable that will be called in this function, but is created in the
//next function.
function debugCallback(mydata){
	//appending the text label of "GeoJSON data: " as well as the actual
	//text of the GeoJSON file.
	//JSON stringify is what helps label the data file.
    $("#mydiv").append('<br>GeoJSON data: <br>' + JSON.stringify(mydata));

};
//debugAjax function is what defines the mydata variable, as well as
//helps execute the debugCallback function.
function debugAjax(){
	//mydata variable is defined.
	var mydata;
	//ajax() is a jQuery method to have an AJAX request
	//brings in the GeoJSON file from my data folder
	$.ajax("data/MegaCities.geojson", {
		//data type is json
		dataType: "json",
		//success brings the debugCallback function that is needed.
		success: function(response){
		//defines the mydata.
        var mydata = response;
		debugCallback(mydata)
		//now that mydata is defined, the mydata in debugCallback function
		//will work and also appear when the debugAjax function is called.
		}
	});
};
//call the initialize function when the document has loaded
//call is moved below the added functions.
$(document).ready(initialize);

$(document).ready(initialize);

window.onload = initialize();
