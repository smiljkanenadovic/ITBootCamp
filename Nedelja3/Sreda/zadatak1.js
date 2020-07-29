// Написати функцију која враћа максимум од 3 броја (Параметри функције су 3 броја)

let maxT = (x, y, z) => {
    let max = x;
    if (max < y) {
       max = y;
    }
    if(max < z) {
        max = z;
    }
    return max;
}