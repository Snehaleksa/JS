const words = ["hello", "google"]
words.push("!!!")

const result =  words.join(' ')
console.log(result);


function reverseString(value){
    console.log(value.split("").reverse().join(""));
    
}
reverseString("hello");