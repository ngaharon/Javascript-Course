//You are a fashion designer known for your unique and vibrant designs, Recently,
//you’ve discovered that some of your fabric patterns change their designs based on the temperature and mood of the wearer,
//You want to create a software application that can predict the changes in the fabric design given the mood and temperature data.
//Think about the classes you will need to model the changing Ankara and how to predict the changes.

//code implementation

// Mood class
class Mood {
    constructor(type) {
        this.type = type;
    }
}

// Temperature class
class Temperature {
    constructor(value) {
        this.value = value;
    }
}

// Fabric class
class Fabric {
    constructor(name, baseDesign) {
        this.name = name;
        this.baseDesign = baseDesign;
        this.currentDesign = baseDesign;
    }

    // Method to change design based on mood and temperature
    changeDesign(mood, temperature) {
        // Simple rules to change design
        if (mood.type === 'happy' && temperature.value > 30) {
            this.currentDesign = 'vibrant and colorful';
        } else if (mood.type === 'sad' && temperature.value < 15) {
            this.currentDesign = 'dark and muted';
        } else if (mood.type === 'neutral' && temperature.value >= 15 && temperature.value <= 30) {
            this.currentDesign = 'calm and balanced';
        } else {
            this.currentDesign = this.baseDesign; // Default design
        }
    }

    // Method to display the current design
    displayDesign() {
        console.log(`The current design of ${this.name} is ${this.currentDesign}`);
    }
}

// Predictor class
class Predictor {
    constructor() {
        this.fabric = null;
    }

    // Method to set the fabric
    setFabric(fabric) {
        this.fabric = fabric;
    }

    // Method to predict and display the design based on mood and temperature
    predictDesign(mood, temperature) {
        if (this.fabric) {
            this.fabric.changeDesign(mood, temperature);
            this.fabric.displayDesign();
        } else {
            console.log("No fabric is set for prediction.");
        }
    }
}

// Example usage
const happyMood = new Mood('happy');
const coldTemperature = new Temperature(10);

const ankaraFabric = new Fabric('Ankara', 'modern');
const designPredictor = new Predictor();

designPredictor.setFabric(ankaraFabric);
designPredictor.predictDesign(happyMood, coldTemperature); // The current design of Ankara is dark and muted
