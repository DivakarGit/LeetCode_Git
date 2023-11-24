
findAnagrams =(s,p) =>{
    let indexArr=[];
    let input1 ;
    let pointer=0;
    while(pointer<=(s.length-p.length)){
        input1 = s.substr(pointer,p.length);
        if(checkAnagram(input1,p)){
            indexArr.push(pointer);
        }
        pointer = pointer+1;
    }
    return indexArr;
}
checkAnagram= (str1, str2) =>{
    let obj1={};
    let obj2 ={};
    if(str1.length === str2.length){
        //a:2,b:1
        for(let i=0; i<str1.length; i++){
            obj1[str1[i]] = (obj1[str1[i]]) ? obj1[str1[i]]+1 : 1
        }
        //b:1,a:2
        for(let k=0;k<str2.length;k++){
            obj2[str2[k]] = (obj2[str2[k]]) ? obj2[str2[k]] +1 : 1
        }
        for(let z=0; z<str1.length;z++){
            if(obj1[str1[z]]!==obj2[str1[z]]){
                return false;
            }
        }
        return true;
    }
    return false
}
clickHandler = () =>{
    let string1 ="abab";
    let string2 ="ab";
    let indexArray = findAnagrams(string1,string2);
    document.getElementById("demo").innerHTML = indexArray;    
}
