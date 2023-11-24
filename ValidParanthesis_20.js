
isValid =(s) =>{
    let openingTags =['(','{','['];
    let closingTags =[')','}',']'];
    let stackArray=[];
    let map = {
        '}':'{',
        ')':'(',
        ']':'['
    }
    if(s.length%2==0){
        for(let index =0;index<s.length;index++){
            if(openingTags.includes(s[index])){
                stackArray.push(s[index]); //Opening Tag: PUSH
            }else if(closingTags.includes(s[index])){
                if(map[s[index]]!=stackArray.pop()){
                    return false;
                }
            }
        }
        if(stackArray.length===0){
            return true;
        }
    }
    return false
}

clickHandler = () =>{
    let string1 ="{}()[]";
    let string2 ="{]";
    let string3 ="{[]}"
    let string4 ="{[]}[]";
    let string5 ="{{";

    let truth = isValid(string5);
    document.getElementById("demo").innerHTML = truth;    
}

/* Problem: 20
    ()[]{}, {[]}[]

    push all opening tags to stack.
    First Closing tag should be equal to last opening tag in stack. if not return false.

*/