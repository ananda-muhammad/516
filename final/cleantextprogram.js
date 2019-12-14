var fs = require('fs');

let all_file = fs.readFileSync('emaildata_am.txt', 'utf8'); //replace emaildata_am.txt with your file name containing corpus data

let array_of_rows = all_file.split(/[\n\r]+/) 

let count = 0;
for (let current_row of array_of_rows) {
  let cells = current_row.split(/\t/);
  let header = "<Purpose: REQ>\n" + //code for header row information, cell number indicates column position (cells[0] === column 1)
    "<Sender: Graduate Student>\n" + //replace or add header row information accordingly
    "<Recipient: "+cells[0]+">\n" +
    "<Power Relationship: "+cells[1]+">\n" +
    "<Social Distance: "+cells[2]+">\n" + 
    "<Degree of Imposition: "+cells[3]+">\n" +
    "<Year Sent: "+cells[4]+">\n" +
	"\n" + 
    "<Subject Line> "+cells[5]+" </Subject Line>\n" +
	"\n" +
    "<Email Content> "+cells[6]+" </Email Content>"
  header = header.replace (/(")/g, ""); //Excel text converted to tab delimited text often includes quotation marks, needs to be deleted
  console.log("The next row in the spreadsheet is: " + current_row) //Check for errors in output
  count++;
  fs.writeFileSync("emailtext_"+count+".txt", header)
}