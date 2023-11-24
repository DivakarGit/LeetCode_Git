
letterCombinations = (digits) =>{

    const hashTable = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    let finalArray=[];
    let keys =[];
    if(digits.length>0){
        for(let a =0; a<digits.length ;a ++){
            keys[a] = hashTable[digits[a]];
        }
        console.log("Keys:>>>"+keys);   // [abc, def]

        if(keys.length===1){
            console.log(keys[0].split(''));
            return keys[0].split('');
        }
        finalArray = (performCombinations(keys));
    }
    console.log(finalArray);
    return finalArray
}

performCombinations = (args) =>{
    let tempArray =[];
    let str0,str1,str2,str3;
    str0 = args[0];
    str1 = args[1];
    if(args[2])
        str2 = args[2];
    if(args[3])
        str3 = args[3];

    for(let i=0;i<str0.length;i++){
        for(let j=0;j<str1.length;j++){
            if(args[2]){
                for(let k=0;k<str2.length;k++){
                    if(args[3]){
                        for(let l=0;l<str3.length;l++){
                            tempArray.push(str0[i]+str1[j]+str2[k]+str3[l])
                        }
                    }else{
                        tempArray.push(str0[i]+str1[j]+str2[k])
                    }
                }
            }else{
                tempArray.push(str0[i]+str1[j])
            }
        }
    }
    return tempArray
}

clickHandler = () =>{
    let digits ="2378";
    document.getElementById("input").innerHTML = digits;    
    let targetArray = letterCombinations(digits);
    document.getElementById("demo").innerHTML = targetArray;    
}

// Problem : 17,

// Start with direct small combination and then generalize the procedure