function checkNumber(num){
    if (num>0){
        console.log(num+ "is a positive number");
        
    }else if(num<0){
        console.log(num + "is a negative number");
        
    }else{
        console.log("number is zero");
        
    }
}
checkNumber(-10)


function checkCharacter(char){
    const vowels = 'aeiouAEIOU';
    if (vowels.includes(char)){
        console.log("it is a vowel");
        
    }else{
        console.log("is consonant");
        
    }
}
checkCharacter("b")

function oddOrEven(num){
    if (num % 2 ==0){
        console.log(num +"is even");
        
    }else{
        console.log(num +"is odd");
        
    }
}
oddOrEven(11)

function devisibleBy5And11(num){
    if (num % 5 ==0 & num % 11 ==0){
        console.log("True");
        
    }else{
        console.log("false");
        
    }
}
devisibleBy5And11(55)

function getDay(day){
    switch (day){
        case 0:
            console.log("Sunday");
            
            break;
        case 1:
            console.log("Monday");
            
            break; 
        case 2:
            console.log("Tuesday");
            
            break; 
        case 3:
            console.log("wednesday");
            
            break; 
        case 4:
            console.log("Tursday");
            
            break;
        case 5:
            console.log("Friday");
            
            break;     
        case 6:
            console.log("Saturday");
            
            break; 
        default:
            console.log("invalid");
            
           
                
    
    }
}
getDay(2)

function centuryYear(year){
    if (year % 100 == 0){
        console.log("True");
        
    }else{
        console.log("False");
        
    }
}
centuryYear(1900)