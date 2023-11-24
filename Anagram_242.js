isAnagram =(str1, str2) =>{
    if(str1.length === str2.length){
        let obj1={};
        let obj2={};
        for(let i=0;i<str1.length;i++){
            obj1[str1[i]] = (obj1[str1[i]]) ? obj1[str1[i]]+1 : 1;
        }
        for(let k=0;k<str2.length;k++){
            obj2[str2[k]] = (obj2[str2[k]]) ? obj2[str2[k]]+1 : 1;
        }
        for(let z=0;z<str1.length;z++){
            if(obj1[str1[z]]!== obj2[str1[z]]){
                return false;
            }
        }
        return true
    }
    return false;
}

clickHandler = () =>{
    let string1 ="anagram";
    let string2 ="nagaram";
    let isit = isAnagram(string1,string2);
    document.getElementById("demo").innerHTML = isit;    
}

// Problem :242
    // Form a hasmap(key/val) with length of each character in string
    // Eg: str1 ="anagram"
    //     obj1 = {'a':3,'n':1,'g':1,'r':'1','m':1}
    //     obj2 ={'n':1,'a':3,'g':1,'r':'1','m':1}
    // Then compare keys with repect to length by iterating one string