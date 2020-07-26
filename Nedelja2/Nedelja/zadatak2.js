// За првих 100 бројева исписати:

// FizzBuzz ако је број дељив и са 3 и са 5
// Fizz ако је број дељив само са 3
// Buzz ако је број дељив само са 5
// Број ако није дељив ни са 3 ни са 5
// (1,2,Fizz,4,Buzz,...)


{
    for (let n = 1; n <= 100; n++) {
        let output = "";
        if (n % 3 == 0)
        output += "Fizz";
        if (n % 5 == 0)
        output += "Buzz";
        console.log(output || n);       
      }
 }