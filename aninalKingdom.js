// The Great Migration Forecast

//Every year, millions of wildebeests, zebras, and other animals participate in the Great Migration across the  Serengeti-Mara ecosystem.
//As a conservationist, you want to develop a software system that models this migration, predicting the movement of the herds based on weather patterns, river levels, and predator locations.
//Consider what classes you’ll need to represent the animals, the environment, and the various factors that influence the migration

// Code Implementation


//river levels class
// class river {
//     constructor(depth) {
//         this.depth = depth;
//     }
// }

// // weather class pattern

// class weather {
//     constructor(name, baseData) {
//         this.name = name;
//         this.baseData = baseData;
//         this.currentData = baseData;
//     }

//     // Method to change weather based on river levels and location
//     changeWeather(river, location) {
//         // Simple rules to change weather
//         if (river.type === 'low' && location.value > 30) {
//             this.currentData = 'hot weather';
//         } else if (river.type === 'high' && location.value < 15) {
//             this.currentData = 'cold and raining';
//         } else if (mood.type === 'neutral' && location.value >= 15 && location.value <= 30) {
//             this.currentData = 'clear sky and sunny';
//         } else {
//             this.currentData = this.baseData; // Default design
//         }
//     }

//     // Method to display the current weather
//     displayWeather() {
//         console.log(`The current weather of ${this.name} is ${this.currentData}`);
//     }
// }

// // prediction class

// class Predictor {
//     constructor() {
//         this.weather = null;
//     }

//     // Method to set the weather
//     setWeather(weather) {
//         this.weather = weather;
//     }

//     // Method to predict and display the weather based on river depths and temprature
//     predictData(river, temperature) {
//         if (this.weather) {
//             this.weather.changeData(river, temperature);
//             this.weather.displayWeather();
//         } else {
//             console.log("No weather is set for prediction.");
//         }
//     }
// }


class Animals {
    constructor(species, population) {
        this.species = species;
        this.population = population;
    }

}

class Weather {
    constructor(pattern) {
        this.pattern = pattern; // spring, summer, winter
    }
}

class River {
    constructor(level) {
        this.level = level; // high, low
    }
}

class Predator {
    constructor(location) {
        this.location = location; // north or south
    }
}

class Environment {
    constructor(Weather, River, Predator) {
        this.Predator = Predator;
        this.River = River;
        this.Weather = Weather;
    }
}

class MigrationPredictor {
    constructor(Environment) {
        this.Environment = Environment;
        this.herdLocation = "initial location";
    }
}



class predictMovement() {

    const { weather, River, predators } = this.environment;

    if (weather.pattern === "dry" && River.level === "low") {
        this.herdLocation = "moving towards water sources";
    } else if (weather.pattern === "rainy" && River.level === "high") {
        this.herdLocation = "spread to graze";
    } else if (predators.some(predator => predator.location === this.herdLocation)) {
        this.herdLocation = "moving against the predators";
    } else {
        this.herdLocation = "No Movement";
    }

    return this.herdLocation;

}

// const predictedLocation = MigrationPredictor.predictMovement();

const weather = newWeather("dry");
const river = newRiver("low");
const predators = [newPredator("north"), newPredator("east")];
const environment = newEnvironment(weather, river, predators);
const migrationPredictor = newMigrationPredictor(environment);
const predictedLocation = newMigrationPredictor.predictMovement();

console.log(`the herd should ${predictedLocation}`);