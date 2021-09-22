getInputValue();
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    
 

if(inputVal.includes('http')){
    document.getElementById('if').src= inputVal;
}
else {
    document.getElementById('if').src= 'nop.gif';
}

}