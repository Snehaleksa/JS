function oddOrEven(num){
    if (num % 2 ==0){
        console.log(num +"is even");
        
    }else{
        console.log(num +"is odd");
        
    }
}
oddOrEven(10)    
    



function grade(score){
    if (score >=90){
        console.log("A");
        
    }else if (score >=80){
        console.log("B");
        
    }else if (score >=70){
        console.log("C");
        
    }else if (score >=60){
        console.log("D");
        
    }else{
        console.log("F");
        
    }

}
grade(50)


function printOddnumbers(n){
    let i= 1;
    while(i <= n){
        if (i % 2 != 0){
        console.log(i);
        
      }
      i++;
   }
}
printOddnumbers(5)