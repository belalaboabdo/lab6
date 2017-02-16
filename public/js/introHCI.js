'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

var currentID;

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	currentID = projectID;


	$.get('/project/'+idNumber,addProject)
	var name = "/project/"+idNumber;
	console.log(name);


	console.log("User clicked on project " + idNumber);
}
function addProject(result) {
		console.log(result);
		var newText = "<img class='detailsImage' src="+result['image']+">" + "<p>"+result['title']+"</p>" +"<p>"+result['date']+"</p>" + "<p>"+result['summary'] + "</p";
		$("#" + currentID +  " .details").html(newText);
		
}
function randomizeColors(e) {
	e.preventDefault();
	console.log("User clicked on color button");
	$.get("/palette", newColors);
}
function newColors(result){
	console.log(result);
	var colors = result['hex'];
	$('body').css('background-color', colors[0]);
	$('.thumbnail').css('background-color', colors[1]);
	$('h1, h2, h3, h4, h5, h5').css('color', colors[2]);
	$('p').css('color', colors[3]);
	$('.project img').css('opacity', .75);


}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
