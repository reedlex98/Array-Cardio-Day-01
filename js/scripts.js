// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const secXVInventors = inventors.filter(inventor => inventor.year.toString().slice(0, 2) === '15')
console.log('Ex01\n')
console.table(secXVInventors)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

const firstLastNames = inventors.map(inventor => [inventor.first, inventor.last])
console.log('Ex02 - Give us an array of the inventors\' first and last names\n')
console.table(firstLastNames)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortedBirthdate = inventors.sort((a, b) => a.year - b.year)
console.log('Ex03 - Sort the inventors by birthdate, oldest to youngest\n')
console.table(sortedBirthdate)

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const howManyYear = inventors.reduce(((acc, curr) => curr.passed - curr.year + acc), 0)
console.log('Ex04 - How many years did all the inventors live?\n', howManyYear)
// 5. Sort the inventors by years lived

const sortedByYearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))
console.log('Ex05 - Sort the inventors by years lived\n')
console.table(sortedByYearsLived)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// To use in the wikipedia page: 
// const category = document.querySelector('.mw-category')
// const links = category.querySelectorAll('a')
// const linkText = []

// links.forEach(link => linkText.push(link.innerHTML))
// const boulevardWithDE = linkText.filter(text => text.includes('de'))

// console.log(boulevardWithDE)


// 7. sort Exercise
// Sort the people alphabetically by last name

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const sortRule = (lastNameA, lastNameB) => {
    for (let index in lastNameA)
        if (lastNameA[index] != lastNameB[index])
            return alphabet.indexOf(lastNameA[index].toLowerCase()) - alphabet.indexOf(lastNameB[index].toLowerCase())
}

const sortedInventorsByLastName = inventors.sort((a, b) => sortRule(a.last, b.last))
const sortedPeopleByLastName = people.sort((a, b) => sortRule(a.split(', ')[1], b.split(', ')[1]))

console.log('Ex07 - Sort the invertors and people alphabetically by last name\n')
console.table(sortedInventorsByLastName)
console.table(sortedPeopleByLastName)

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const transportation = data.reduce((obj,item) => {
    if(!obj[item]) obj[item] = 0
    obj[item]++
    return obj
}, {})
console.log(transportation)
