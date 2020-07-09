const randomElement = require('./emagi-random.js')
const emagiSearch = require('./emagi-search.js')
const emagify = require('./emagify.js')

const symbols = require('./emagi-symbols');
const words = require('./emagi-words');





const input1 = process.argv[2]  //This will capture the 'Random' input

const input2 = process.argv[3] // This will capture the 'Search' input 

const input3 = process.argv.slice(3)// This will capture the 'Convert'






if (process.argv[2] === 'Convert'){
    console.log(emagify(input3))
}

if (process.argv[2] === 'Random'){
    console.log(randomElement(symbols))
}

if (process.argv[2] === 'Search'){
    console.log(emagiSearch(input2))

}


if (input1 !== 'Convert' && input1 !== 'Search' && input1 !== 'Random'){
    console.log("You did not input a valid command. Please input 'Convert' followed by a word or phrase if you want it to be converted to an emoji; 'Search' followed by the word you want searched; or 'Random' if you want a random emoji outputted.")
}





// function getInput(i) {
//     return process.argv[i + 2];
//   }