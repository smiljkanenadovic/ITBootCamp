export const formatNumber = function(num, type) { 
    var numSplit, int, dec;
    
    num = Math.abs(num);
    num = num.toFixed(2); 

    numSplit = num.split('.');

    int = numSplit[0];
    if(int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];       
        return (type === 'exp' ?  '-' : '+') + ' ' + int + '.' + dec;
};

