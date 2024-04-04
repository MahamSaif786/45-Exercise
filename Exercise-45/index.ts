/*                            Exercise-45
Cars:Write a function that stores information about a car in an Object. The function should always 
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword 
arguments. Call the function with the required information and two other name-value pairs, such as 
a color or an optional feature. Print the Object that’s returned to make sure all the information was
stored correctly.*/



// Define the storeCarInfo function
function storeCarInfo(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): object {
    let carInfo: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add additional options to the carInfo object
    for (let option of options) {
        for (let key in option) {
            carInfo[key] = option[key];
        }
    }

    return carInfo;
}

// Call the storeCarInfo function with the required information and additional options
let car = storeCarInfo("Audi", "A6", {color: "black", year: 2023});

// Print the Object returned by the function
console.log(car);
