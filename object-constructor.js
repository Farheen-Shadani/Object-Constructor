let constructPerson = function (name, hobbies, gender) {
    return {
        name: name,
        gender: gender,
        hobbies: hobbies,
        eat: function () {
            return eating;
        },
        greeting: function () {
            console.log(`Hii!! i'm ${this.name}`);
        }
    };
}

let person1 = constructPerson("Farheen", ["singing", "baking"], "Female");

function constructIdCard(studentName, studentGender, studentInterest, studentAge) {
    return {
        name: studentName,
        gender: studentGender,
        interests: studentInterest,
        age: studentAge,
        greeting: function () {
            console.log(`Hii!! i'm ${this.name}`);
        },
        bio: function () {
            console.log(`${this.name} is ${this.age} years old. I like ${this.interests}.`)
        }
    }
}

let student1 = constructPerson("Farheen", "Female", ["singing", "baking"], 1432);

function constructCar(company, carName, engineNumb, year, numb) {
    return {
        company: company,
        carName: carName,
        engineNumber: engineNumb,
        manufacturingDate: year,
        modelNumber: numb,
    }
}

let city = constructCar("Honda", "City", "FD-252-GT-0021", "2016", "290");

let makeCalculator = function (name, type, model, ) {
    return {
        name: name,
        type: type,
        model: model,
    };
}

let myCalculator = makeCalculator("Casio", "Scientific", "FD-252-GT-0021");


let lipstick = function (name, type, color, code, price, manufacturingDate, expiryDate, ) {
    return {
        name: name,
        type: type,
        color: color,
        colorCode: code,
        price: price,
        manufacturingDate: manufacturingDate,
        bestBefore: expiryDate,
        branding: function () {
            console.log(`${this.name}  is what you are finding. These ${this.type} lipsticks gives you a different look.`)
        }
    };
}

let myLipstick = lipstick("lakme", "matte", "red", 48, "500", "2nd-Aug-2019", "2nd-Feb-2021")

let bakery = function (name, item, quantity, price, manufacturingDate, expiryDate, ) {
    return {
        bakery: name,
        itemName: item,
        numbOfItem: quantity,
        price: `${this.price} * ${this.quantity}`,
        manufacturingDate: manufacturingDate,
        bestBefore: expiryDate,
        branding: function () {
            console.log(`${this.name}  is the name of your choice. We believe in Quality.`)
        }
    };
}

let myBakeryItem = lipstick("Baker's Hut", "Pastry", 4, 85, "23rd-Aug-2019", "2nd-sep-2019")