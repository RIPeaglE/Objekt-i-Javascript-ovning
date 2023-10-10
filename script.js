class Car{
    constructor(car, model, price, year, img){
        this.car = car;
        this.model = model;
        this.price = price;
        this.year = year;
        this.img = img;
    }
}

var bmw1 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw2 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw3 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw4 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw5 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw6 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw7 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw8 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw9 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");
var bmw10 = new Car("BMW", "E30", "30,000,000$", 1994, "https://www.klassiker.nu/public/styles/facebook/public/images/2015/06/bmw-1.jpg?h=c10595da&itok=1sZVByfj");

console.log(bmw1)


carry = [bmw1, bmw2, bmw3, bmw4, bmw5, bmw6, bmw7, bmw8, bmw9, bmw10]

console.log(bmw1)

cars2Elm = document.getElementById("cars2")


let carItems = ""
for (let i = 0; i < carry.length; i++) {
    carItems += `
                <div>
                    <h1>
                        ${carry[i].car}
                    </h1>
                    <p>
                        ${carry[i].model}
                    </p>
                    <p>
                        ${carry[i].price}
                    </p>
                    <p>
                        ${carry[i].year}
                    </p>
                    <img src="${carry[i].img}" alt="car">
                </div>
    `
}
cars2Elm.innerHTML = carItems 

