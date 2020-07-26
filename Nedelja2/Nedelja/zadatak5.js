// Исписати Марио пирамиду одређене висине:
// За n = 5

//     # #
//    ## ##
//   ### ###
//  #### ####  
// ##### #####

    let n = 5;
    let i = 0;
    let line = "";

    for(; i <= n; i++) {
        line += " ".repeat(n-i) + "#".repeat(i) + " " + "#".repeat(i) + " ".repeat(n - i) + "\n";
    }
    console.log(line);
