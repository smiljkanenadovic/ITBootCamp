// Написати функцију која исписује све елементе низа који су дељиви са 5

let arr = [55,1,2,3,4,5,10,15,23,1,5];

const divisibleByFive = arr => {
    arr.forEach(element => { 
        if(element % 5 === 0)
            console.log(element);
    });    
}
divisibleByFive(arr);