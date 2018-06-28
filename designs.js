// When size is submitted by the user, call makeGrid()
$('input[type="submit"]').click(function (event) {
	clearGrid();
	event.preventDefault();
	makeGrid();
});

function makeGrid() {

// Your code goes here!
	let table = $('#pixelCanvas');
	// Select size input
	let inputH = $('#inputHeight').val();
	let inputW = $('#inputWeight').val();
	// Using for loop create the grid dynamically
	for (let i = 0; i < inputH; i++ ) {
		// create a row
		let row = $('<tr></tr>').appendTo(table);

		for (let j = 0; j < inputW; j++) {
			row.append('<td></td>');
		}
	}
	// adding color to the grid
	var grid = table.find('td');
	grid.click(function() {
		var color;
		// Select color input
		color = $('#colorPicker').val();
		$(this).attr('bgcolor', color);
	});
}
// Using while loop to clear the grid
function clearGrid() {
	var tables = document.getElementsByTagName('table');
	var table = tables.item(0);
	var i = table.rows.length - 1;
	while (i >= 0) {
		table.remove(0);
		i--;
	}
}