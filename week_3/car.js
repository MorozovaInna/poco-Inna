const cars = [
    {
    brand: "Mercedes",
    model: "G45",
    color: "red",
    year_built: 2014,
    current_mileage: 10_000,
    },
    {
    brand: "BMW",
    model: "M5",
    color: "black",
    year_built: 2020,
    current_mileage: 1_000,
    },
    {
    brand: "Volkswagen",
    model: "Golf",
    color: "white",
    year_built: 2000,
    current_mileage: 247_000,
    },
]

function compare_numbers (a, b) {
    return a - b;
}
let numbers = [11, 2, 22, 1];
numbers.sort(compare_numbers);
console.log(numbers);

cars.sort((a, b) => a.year_built - b.year_built)
cars.sort((a, b) => a.current_mileage - b.current_mileage)

//const car2 = cars[1];
//console.log(car2.model);

console.log(cars[1].model);


for (let i = 0; i < cars.length; i++) {
    let car = cars[i];
    console.log((i + 1) + ". " + car.brand + " " + car.model + ", " + car.color + ", built in " + car.year_built);
}

let str = "Hello world!".substring(0, 8);
console.log(str);