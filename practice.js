const randomElement = require('./emagi-random.js')
const emagiSearch = require('./emagi-search.js')
const emagify = require('./emagify.js')

const symbols = require('./emagi-symbols');
const words = require('./emagi-words');





let input1 = getInput(0)  //This will capture the 'Search', 'Convert', or 'Random' input

let input2 = getInput(0) + getInput(1) // This should capture a 'Search' input and the search word after it.






const entrySubmission = function(input1){
    if (input1 === 'Convert'){  

}

}


let convertEmoji = emagify(input1);


console.log(convertEmoji)

//Not sure if this works or how to make this work//
let randomEmoji = randomElement(symbols);
    if (input1 === 'Random'){
}
    console.log(randomEmoji);


let searchEmoji = emagiSearch(input2);
if (input1 === 'Search'){
}
console.log(searchEmoji)



if (input1 !== 'Convert' || input1 !== 'Search' || input1 !== 'Random'){
    console.log("You did not input a valid command. Please input 'Convert' followed by a word or phrase if you want it to be converted to an emoji; 'Search' followed by the word you want searched; or 'Random' if you want a random emoji outputted.")
}





function getInput(i) {
    return process.argv[i + 2];
  }