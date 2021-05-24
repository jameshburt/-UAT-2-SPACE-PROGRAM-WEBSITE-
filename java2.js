//variable numbers defined, adding the two numbers together
//if the sum of 

function play() {
    var die1 = 5
    var die2 = 2

    // the sum of 5 + 2 = 7

    var sum = die1 + die2

    //displays --  Die 1 = 5, Die 2 = 7,
    //they are all brought down a line, like pressing the (enter key) = (<br/>)
    //if 7, the sum, is equal completely to 7 and if the sum of 7 is completely equal to 11
    //or if the 5 is completely equal to 7 and 7 divided by 2 is completly equal to 0, not true then the first is chosen, which is (CRAPS - you lose)
    
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    if (sum == 7 || sum == 11) {
        document.write("CRAPS - you lose")
        document.write("<br/>")
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.write("DOUBLES - you win")
        document.write("<br/>")
    }
    
}
document.write("Simple Craps")
document.write("<br/>")
play()
// This is what will be displayed at the top of the page - Simple Craps - 