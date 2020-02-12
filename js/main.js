//initialize function called when the script loads
//debugAjax() function is now added
function initialize(){
	cities();
  debugAjax();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
	//Calls the addColumns function to be executed in the table.
	addColumns(cityPop);
	//Calls the addEvents function to be executed in the table.
    addEvents();
};
function addColumns(cityPop){
    $('tr').each(function(i){
    	if (i == 0){
				// append was missing a p
			$(this).append('<th>City Size</th>');
    	} else {
    		var citySize;
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
					//change citysize to citySize
    		} else {
    			citySize = 'Large';
    		};
			$(this).append('<td>'+ citySize +'</td>');
			// add ()
			// add missing bracket to td


    	};
    });
};
//create the function addEvents.
function addEvents(){

	$('table').mouseover(function(){
		var color = "rgb(";

		for (var i=0; i<3; i++){
			var random = Math.round(Math.random() * 255);
			color += random;
			if (i<2){
				color += ",";
			} else {
				color += ")";
			}
		};
		$(this).css('color', color);
	});
	function clickme(){
		alert('Hey, you clicked me!');
	};
	$('table').on('click', clickme);
};


// call debugCallback as a function
function debugCallback(mydata){

    $("#mydiv").append('<br>GeoJSON data: <br>' + JSON.stringify(mydata));
		// add <br> to both ends of Geojson data:

};
function debugAjax(){
	//
	//mydata variable is assigned.
	var mydata;
	//ajax retrieves data from the json in the data folder
	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		success: function(response){
		//here we define my data inside a variable
  var mydata = response;
		debugCallback(mydata)
		// my data is defined and function will be able to call it back
			}
		});
	};
//call the initialize function when the document has loaded
//call is moved below the added functions.


// Below delete unescearry divs
//	$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
//};

//$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
$(document).ready(initialize);
