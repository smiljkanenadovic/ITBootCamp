// Написати функцију која израчунава цену пице по квадратном центиметру 
// (параметри функције су полупречник у цм, и цена пице)

let pizzaPrice = (r, price) => {
    let surface = Math.round(Math.pow(r, 2) * Math.PI);
    let pricePerCm = price / surface;
    
    return pricePerCm;
}


    