isPalindrome =(input)=>{
    let start=0;
    let end= input.length-1;
    const alphaNumericSet = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);

    while(start<end){
        if(input[start]==' ' || !alphaNumericSet.has(input[start].toLowerCase())){
            start++;
        }else if(input[end]==' ' || !alphaNumericSet.has(input[end].toLowerCase())){
            end--
        }else if(input[start].toLowerCase()===input[end].toLowerCase()) {
                start ++;
                end--;
        }else{
                return false;
        } 
    }
    return true;
}

clickHandler =()=>{
    let input1 ="level";
    let input2 ="A man, a plan, a canal: Panama";
    let output = isPalindrome(input2);
    document.getElementById("demo").innerHTML = output;
}



// Problem: 125

/**
 * Put index from start, end and increment and decrement respectively.
 * compare till you break or start>end
 */