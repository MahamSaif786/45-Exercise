/*                                     Exercise-39
 City Names:Write a function called city_country() that takes in the name of a city and its country. The
function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least
three city-country pairs, and print the value that’s returned*/
// Function to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with three city-country pairs
var city1 = city_country("Lahore", "Pakistan");
var city2 = city_country("Paris", "France");
var city3 = city_country("New York", "USA");
// Printing the returned values
console.log(city1);
console.log(city2);
console.log(city3);
