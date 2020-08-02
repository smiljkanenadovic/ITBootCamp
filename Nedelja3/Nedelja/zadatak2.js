// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

function lifeSupply(numPerMonth, age) {
    let maxAge = 100;
    let ageDelivery = maxAge - age;

    return numPerMonth * 12 * ageDelivery
}
console.log(lifeSupply(10, 26));
