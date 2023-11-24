lengthOfLongestSubstring =(input) =>{
    if(input.length>0){
        //let strip =1;
        let len = input[0].length;

        let start =0;
        let end = 1;
        let index=0;
        while(start<input.length && end<input.length){
            if(hasRepeatedChars(input.substr(start,len+1))){
                start = start+1;
            }else{
                len =len+1;
                index =start;
            }
            end =end+1;
        }
        return input.substr(index,len).length
    }
    return 0;
}
hasRepeatedChars =(str) =>{
    for(let i =0; i<str.length;i++){
        if(str.indexOf(str[i])!==str.lastIndexOf(str[i])){
            return true;
        }
    }
    return false;
}

clickHandler =()=>{
    let input1 ="aabcabc";
    let input2 ="pwwkew";
    let input3=" "
    let output = lengthOfLongestSubstring(input1);
    document.getElementById("demo").innerHTML = output;
}

//Problem 3
/**
 * Approach with Sliding Window problem.
 * When you find  Repeated characters ==> SLIDE
 * when you dont find Repeated characters ==> EXPAND
 */