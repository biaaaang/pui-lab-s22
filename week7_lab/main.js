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

let animals = [new Dog(), new Panda(), new Lion()];
let names = ["aa", "bb", "cc", "dd", "ee"];

function generateRandomIndex (maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    let randomIndex = generateRandomIndex(names.length);
    return names[randomIndex];
}

function generateRandomAge() {
    let randomAge = generateRandomIndex(10);
    return randomAge;
}

function generateRandomAnimal() {
    let randomIdx = generateRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];

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
    let animal = generateRandomAnimal();
    console.log(animal);

    document.getElementById("animal-properties").textContent = 
             animal.name + " " + animal.age + "years old";
    
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
                                                               
}
