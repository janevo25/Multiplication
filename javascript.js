alert('hello world!');
console.log('Here\'s a for loop showing 1...10:\n')
for (let i =0;i < 10; i++){
    console.log( `${ i }\n`)
}
console.log('Here\'s do-while loop showing 1...10:\n')
    let i =0
do{
    console.log(i+'\n')
    i++
} while (i <10)

console.log('Here\'s a while loop showing 1...10:\n')
let reagan=0
while (reagan <10){
    console.log(`$ {reagan }\n`)
    reagan++
}
console.log('Here\'s a foreach loop iterating over an array showing 1...10:\n')
let nums= [...Array(10).keys()]
nums.forEach(num => {
    console.log(`${num}\n`)
})
console.log('Here\'s a multiplication table method rendered in the console with a for loop:\n')
let timesTable =(to) => {
    console.log('Here\'s a times table to'+ to + '\n')

    if (Number.isInteger(to)) {
        // row iterator
        for (let i = 1; i <= to; i++) {
            let row = ""
            //columns iterator
            for (let j = 1; j <= to; j++) {
                row += `${i * j}\t`
            }
            console.log(rowContents)
        }
    } else{
            console.log(`Sorry, ${to} isn't a number!}`)
    }
}
timesTable(12)
timesTable(20)

function getRowsDesired() {
    // console.log(Number(document.querySelector('.rows input#rows').value))
    // console.log(Number(document.querySelectorAll('.rows input')[0].value))
    console.log(Number(document.getElementById('rows').value))
    return Number(document.getElementById('rows').value);
}

function getColumnsDesired() {
    console.log(Number(document.getElementById('cols').value))
    return Number(document.getElementById('cols').value)
}

function getHighlightValue(){
    let highlightValue=document.getElementById("highlight").value

    if (highlightValue !==''){
        return Number(highlightValue)
    }
}

function createWithHtmlTable(rows, cols, highlight) {
    let string
    if (rows && cols) {
        string = "<table>\n"

        for (let row = 1; row <= rows; row++) {

            if(highlight && highlight === row) {
                string += "<tr class='highlight'>\n"
            } else {
                string += `<tr>\n`

            }
            for (let col = 1; col <= cols; col++) {
                string += "<td>"
                string += row * col
                string += "</td>\n"
            }
            string += "</tr>\n"
        }
        string += "</table>\n"
    } else {
        string = 'Provide some inputs'
    }
    document.getElementById("output").innerHTML = string;

}
