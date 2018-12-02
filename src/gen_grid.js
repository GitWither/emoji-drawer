function genGrid(width, height) {
    var drawer = document.getElementById('drawer');
    var table = document.createElement('table');
    for(var x = 0; x < width; x++) {
        var tableRow = document.createElement('tr')
        tableRow.id = `r${x}`
        for(var y = 0; y < height; y++) {
            var tableH = document.createElement('th');
            tableH.id = `r${x}c${y}`;

            var select = document.createElement('select');
            select.id = `r${x}c${y}`;

            tableH.appendChild(select);
            tableRow.appendChild(tableH);
        }
        table.appendChild(tableRow);
    }
    drawer.appendChild(table);
}