/*                            Exercise-45
Cars:Write a function that stores information about a car in an Object. The function should always
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword
arguments. Call the function with the required information and two other name-value pairs, such as
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly.*/
// Define the storeCarInfo function
function storeCarInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional options to the carInfo object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        for (var key in option) {
            carInfo[key] = option[key];
        }
    }
    return carInfo;
}
// Call the storeCarInfo function with the required information and additional options
var car = storeCarInfo("Audi", "A6", { color: "black", year: 2023 });
// Print the Object returned by the function
console.log(car);
