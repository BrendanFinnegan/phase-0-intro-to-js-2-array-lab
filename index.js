// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
let destructivelyAppendCat = cat => cats.push(cat)
let destructivelyPrependCat = cat => cats.unshift(cat)
let destructivelyRemoveLastCat = cat => cats.pop(cat)
let destructivelyRemoveFirstCat = cat => cats.shift(cat)
let appendCat = cat => {return [...cats, cat]}
let prependCat = cat => {return [cat, ...cats]}

let removeLastCat = () => {return cats.slice(0,cats.length-1)}
let removeFirstCat = () => {return cats.slice(1)}
