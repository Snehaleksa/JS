function formatSring(value){
    console.log(value.trim().toLowerCase().replaceAll(' ','-') + "!!!");
    
    
    
}
formatSring("Hello World! JS is Fun ")


function removeVowels(value){
    console.log(value.replaceAll(/[aeiouAEIOU]/g,'').toUpperCase().concat ("!!!"));
    
}
removeVowels("javascript is amazing")
