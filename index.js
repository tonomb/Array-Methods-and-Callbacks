import { fifaData } from './fifa.js';
console.log(fifaData);

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const newArray = fifaData.filter(function(item){
    
    return item.Stage === 'Final' && item.Year === 2014;
});

// console.log(newArray[0]["Home Team Name"]);
// console.log(newArray[0]["Away Team Name"]);
// console.log(newArray[0]["Home Team Goals"]);
// console.log(newArray[0]["Away Team Goals"]);
// console.log(newArray[0]["Home Team Name"]);





/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalsData = data.filter(function(item){
        return item.Stage === 'Final';
    });

    return finalsData
};

// console.log(getFinals(fifaData));



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    const years = callback(fifaData);

    const yearArray = years.map(function(items){
        return items.Year;
    })

    return yearArray;
};

// console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    const winners = [];
    callback(fifaData).forEach(function(game){
        if(game['Home Team Goals'] > game['Away Team Goals']){
            winners.push(game['Home Team Name'])
        } else if(game['Home Team Goals'] < game['Away Team Goals']){
            winners.push(game['Away Team Name'])
        } else{
            winners.push(game['Win conditions'])
        }
    })    

    return winners
};

// console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersCb, yearsCb) {
    const winners = winnersCb(getFinals);
    const years = yearsCb(getFinals);
    winners.forEach(function(winner, index){
       console.log(`In ${years[index]}, ${winner} won the world cup!!`);
    })
    
};

// getWinnersByYear(getWinners, getYears);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    let avgHomeGoals = data.reduce(function (accumulator, element) {
        return accumulator + element['Home Team Goals']
    },0);

    avgHomeGoals = (avgHomeGoals / data.length).toFixed(2);

    let avgAwayGoals = data.reduce(function (accumulator, element) {
        return accumulator + element['Away Team Goals']
    },0);

    avgAwayGoals = (avgAwayGoals / data.length).toFixed(2);
    
    return `In each match the home team scores ${avgHomeGoals} goals on average vs ${avgAwayGoals} away goals` ;

};

// console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {    

    const finals = data.filter(function(item){
        return item.Stage === 'Final' && (item['Home Team Initials'] === teamInitials || item['Away Team Initials'] === teamInitials)
    })
    console.log(finals)
    let count = 0;
    finals.forEach(function(final){
        if(final['Home Team Goals'] > final['Away Team Goals'] && final['Home Team Initials'] === teamInitials){
            count ++;
        } else if(final['Home Team Goals'] < final['Away Team Goals'] && final['Away Team Initials'] === teamInitials){
            count++;
        }
    });

    return `${teamInitials} has won ${count} world cups`
};

console.log(getCountryWins(fifaData, 'BRA'));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
