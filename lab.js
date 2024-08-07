console.log("ready");

//Original string
const csv =
    "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(csv);

//  Part 0. Feeling Loopy exercise
// iterate over each char in string, log results
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
let cell = "";
let row = [];
let data = [];
for (let i = 0; i < csv.length; i++) {
    let current_char = csv[i];
    if (current_char !== "," && current_char !== "\n") {
        cell = cell + current_char;
    }
    //when you encounter "," or "\n" or end of string, log the cell
    if ("," === current_char || "\n" === current_char || i == csv.length - 1) {
        row.push(cell);
        cell = "";
    }
    // When you encounter the “\n” sequence or end of string, move to the next “row.
    if ("\n" === current_char || i === csv.length - 1) {
        data.push(row);
        row = [];
    }
}
console.log(data);

// Part 1. Refactor the code
//array of each row
const rows = csv.split("\n");
console.log(rows);

for (let row of rows) {
    const cells = row.split(",");
    let cell1, cell2, cell3, cell4;
    [cell1, cell2, cell3, cell4] = [...cells];
    console.log(cell1, cell2, cell3, cell4);
}

