let str ='hello world'
function nameConversion(value) {
    console.log(value.toUpperCase());

 } 
 nameConversion(str)


function namelength(value){
   console.log(value.length)
}
namelength(str)

function check(value){
    console.log(value.includes('hello'));
    
}
check(str)

function trim(value){
    console.log(value.trim());
    
}
trim('  hello world')

function replaceWord(){
    console.log(str.replace('world','World'));
    
}
replaceWord(str)

function firstCharacter(){
    console.log(str.charAt(0));
    
}
firstCharacter(str)

function firstLetter(){
    console.log(str.charAt(0).toLocaleUpperCase());
    
}
firstLetter(str)

function append(value){
    console.log(value + "!!!");
    
}
append(str)
