function genGrid(width, height) {
    //Get the drawer div
    var drawer = document.getElementById('drawer');
    //Create the table element
    var table = document.createElement('table');
    for(var x = 0; x < width; x++) {
        //Create table row elements
        var tableRow = document.createElement('tr')
        //Set their id
        tableRow.id = `r${x}`
        for(var y = 0; y < height; y++) {
            //Create table column elements
            var tableColumn = document.createElement('th');
            //Set their id
            tableColumn.id = `r${x}c${y}`;

            //Create dropdown elements
            var select = document.createElement('select');
            //Set their id
            select.id = `r${x}c${y}`;

            //Append dropdown elements to columns
            tableColumn.appendChild(select);
            //Append columns to rows
            tableRow.appendChild(tableH);
        }
        //Append rows to table
        table.appendChild(tableRow);
    }
    //Append table to drawer div
    drawer.appendChild(table);
}