//William Carey
//2.20.2015
//Assignment Debug: Assignment: Debug

// Create privatized scope using a self-executing function
(function(){

	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),  //Declare Dom element for search results
		searchInput = document.forms[0].search,           //Declare Dom element for search Input
		currentSearch = ''                                //Declare current search as an empty string
	;
	
	// Validates search query
	var validate = function(query){                      //Assign an anonymous function to var validate --Fixed error

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){                     //Start a while loop to see if the search is empty  -- Fixed error switched = with === to show comparison
			query = query.substring(1, query.length);     //
		};
		while(query.charAt(query.length-1) === "") {
            query = query.substring(0, query.length - 1);
        };  //Fixed error, closure error, added curly brace
		
		// Check search length, must have 3 characters
		if(query.length < 3){                             //Add if statement if search isn't long enough
			alert("Your search query is too small, try again."); // Alert user the search needs to be longer -Fixed Error added "
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};
		
		search(query);
	};
	
	// Finds search matches
	var search = function(query){                          //Declare variable to call function for search  -- Fixed error by adding open curly brackets

		
		// split the user's search query string into an array
		var queryArray = query.split(" ");                  //Declare variable to make users search fall into an array - fixed error switched join to split.
		
		// array to store matched results from database.js
		var results = [];                                  //Declare variable that finds results from database.js

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {               //create a for loop to search through the array of saved

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');           //Set variable to account for all titles in database in Uppercase o
            var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd); // Set variable to account for all titles in Lowercase  -Fixed Error, camel casing incorrect on Lowercase

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {  //Create for loop to go through users search
                var qitem = queryArray[ii].toLowerCase();      //Create variable to account for lowercase in user search

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);           //Create variable to account for search and database match
                if (compare !== -1) {                            //Check if there is a match
                    results.push(db[i]);                       //If there is a match results are pushed into the array as a option
                };  //Fixed error, closure error, added curly brace
            };    //Fixed error, closure error, added curly brace
        };     //Fixed error, closure error, added curly brace

		results.sort();                                        //Calls the results function and sorts it
		
		// Check that matches were found, and run output functions
		if(results.length === 0){                               //Set if statement for results. If no results   - in comparing a single = shouldn't be used, changed to 3x's =
			noMatch();                                        //Search alerts user there is no match
		}else{                                                //If there is a result
			showMatches(results);                             //Set alert to show results
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){                                 //Set variable for no match
		var html = ''+                                        //Set variable for HTML that provides user feedback
			'<p>No Results found.</p>'+                       //Lets user know, no results found
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'  //Provides user a suggestion for their search
		;
		resultsDIV.innerHTML = html;                          //calls original dom element for search results and also variable for HTML for user feedback
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){                      //Set variable for matches, to call function that shows results
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',                         //If correct html adjust to show the results of search
			title,                                           //Title and Url should also be provided or linked to
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){            //Set loop to go through results function    - set = to === to account for different options
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');              //If the title and index array match
			title = results[i].substring(0, titleEnd);       //Search results are provided     -- fixed error substring needs no camel casing
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);  // After title matches, video url is provided
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';    //Video is available to user
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT. //if video is found information and links are all provided in HTML page
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function() {  //From the search the document is pulled the matches the search
        var query = searchInput.value;        //Variable call for search to check for match
        validate(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;   // cancels the original search
    };  //Fixed error, closure error, added curly brace

})();