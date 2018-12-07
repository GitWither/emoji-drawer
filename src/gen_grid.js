function genGrid(width, height) {
    //Get the drawer div
    var drawer = document.getElementById('drawer');
    //Create the table element
    var table = document.createElement('table');
    table.className = "table"
    for(var x = 0; x < width; x++) {
        //Create table row elements
        var tableRow = document.createElement('tr');
        tableRow.id = `r${x}`
        for(var y = 0; y < height; y++) {
            //Create table column elements
            var tableColumn = document.createElement('th');
            tableColumn.id = `r${x}c${y}`;

            //Create dropdown elements
            var select = document.createElement('select');
            var emoji = document.createElement('img')
            var option = document.createElement('option');
            option.value = "OH HELLO THERE"
            option.text = "😂"
            select.appendChild(option)
            select.onchange = function(image) {
                if(image.value = "OH HELLO THERE") {
                    emoji.src = "1f1e6"
                }
            }

            //Append dropdown elements to columns
            tableColumn.appendChild(emoji)
            tableColumn.appendChild(select);
            //Append columns to rows
            tableRow.appendChild(tableColumn);
        }
        //Append rows to table
        table.appendChild(tableRow);
    }
    //Append table to drawer div
    drawer.appendChild(table);
}

function parseGrid() {

}

function clearGrid() {

}

function populateList() {

}