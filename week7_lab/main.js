function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.image = "dog.jpg";
    this.image_alt = "A cute dog.";
}

function Panda(name, age) {
    this.name = name;
    this.age = age;
    this.image = "panda.jpg";
    this.image_alt = "A fat panda.";
}

function Lion(name, age) {
    this.name = name;
    this.age = age;
    this.image = "lion.jpg";
    this.image_alt = "A strong lion.";
}

var animals = [new Dog(), new Panda(), new Lion()];
var names = ["aa", "bb", "cc", "dd", "ee"];

function generateRandomIndex (maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var randomIndex = generateRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge() {
    var randomAge = generateRandomIndex(10);
    return randomAge;
};

function generateRandomAnimal() {
    var randomIdx = generateRandomIndex(animals.length);
    var randomAnimal = animals[randomIdx];

    if (randomAnimal instanceof Dog)
    {
        return new Dog(generateRandomName(), generateRandomAge());
    }
    else if (randomAnimal instanceof Lion)
    {
        return new Lion(generateRandomName(), generateRandomAge());
    }
    if (randomAnimal instanceof Panda)
    {
        return new Panda(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {
    var animal = JSON.parse(localStorage.getItem("savedAnimal"));
    var hasSavedAnimal = false;
    if (animal === null) {
        document.getElementById("button-storage").textContent = "Save Animal";
        animal = generateRandomAnimal();
    }
    else {
        document.getElementById("button-storage").textContent = "Clear Animal";
        hasSavedAnimal = true;
    }


    document.getElementById("animal-properties").textContent = 
             animal.name + " " + animal.age + "years old";
    
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    
    document.getElementById("button-storage").addEventListener("click", function() {
                if (hasSavedAnimal) {
                    localStorage.removeItem("savedAnimal");
                    document.getElementById("button-storage")
                            .style.display = "none";
                    document.getElementById("button-action-text")
                            .textContent = "Cleared!";
                    document.getElementById("button-action-text")
                            .style.display = "block";
                }
                else {
                    localStorage.setItem("savedAnimal", JSON.stringify(animal));
                    document.getElementById("button-storage")
                            .style.display = "none";
                    document.getElementById("button-action-text").textContent = "Saved!";
                    document.getElementById("button-action-text")
                            .style.display = "block";
                }
            });
}
