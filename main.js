var productArr = [];

var swagCar = {
 name: "Swag Car",
 description: "For when your car needs to be fly and blind the cops.",
 price: "$120,001", 
 image: "images/swag_car.jpg",
 button: "Add to Cart"
}

productArr.push(swagCar);

var swagAccordion = {
 name: "Accordion Pants",
 description: "For when you need to make music, as well as a statement.",
 price: "$277", 
 image: "images/accordion.jpg",
 button: "Add to Cart"
}

productArr.push(swagAccordion);

var swagBShoes = {
 name: "Ball Shoes",
 description: "For when you want to feel like you're rolling in style.",
 price: "$129", 
 image: "images/ballshoes.jpg",
 button: "Add to Cart"
}

productArr.push(swagBShoes);

var swagBatRing = {
 name: "Bat Ring",
 description: "For when you need the reminder that you don't need powers to be a superhero.",
 price: "$80", 
 image: "images/batring.jpg",
 button: "Add to Cart"
}

productArr.push(swagBatRing);

var swagLamp = {
 name: "Swag Lamp",
 description: "For when you need to shed a little light on your awesomness.",
 price: "$200", 
 image: "images/lamp.jpg",
 button: "Add to Cart"
}

productArr.push(swagLamp);

var swagLog = {
 name: "Swag Log",
 description: "For when you need a little help reminding people how awesome you are.",
 price: "$1000", 
 image: "images/log.jpg",
 button: "Add to Cart"
}

productArr.push(swagLog);

var swagPizza = {
 name: "Swag Shirt",
 description: "For when others needs to hunger for your level of swag.",
 price: "$150", 
 image: "images/pizza.jpg",
 button: "Add to Cart"
}

productArr.push(swagPizza);

var swagUmbrella = {
 name: "Swag Dress",
 description: "For when you need protection from the tears of jealousy your swag inspires.",
 price: "$530", 
 image: "images/umbrella.jpg",
 button: "Add to Cart"
}

productArr.push(swagUmbrella);

var swagUnicorn = {
 name: "Swag Hat",
 description: "For when you need to raise your swag level to extreme.",
 price: "$125", 
 image: "images/unicorn.jpg",
 button: "Add to Cart"
}

productArr.push(swagUnicorn);

console.log(productArr);


var productElements = "";



for (var i = 0; i < productArr.length; i++) {
	productElements += " <div class='card'>" + "<img class='card' src='" + productArr[i].image + "'>";
	productElements += "<h2>" + productArr[i].name + "</h2>";
	productElements += "<p>" + productArr[i].description + " " + "<strong>" + productArr[i].price + "</strong>" + "</p>";
	productElements += "<button type='button'>" + productArr[i].button + "</button> </div>";
}

var footer = "<br/><br/><footer>&copy; 2016 Fashion Police. Keep your swag goin'!</footer>";
document.getElementById("content").innerHTML = productElements + footer;
console.log(productElements);










// document.getElementById("content").innerHTML = "<img class='card' src='" + productArr[0].image + "'>";
 // = document.getElementById("content").innerHTML;

// document.getElementById("content").innerHTML = "<img class='card' src='" + productArr[i].image + "'>";















