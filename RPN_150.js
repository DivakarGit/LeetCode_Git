
evalRPN =(tokens) =>{
    let finalArray=[];
    let validOperaters =['+','-','*','/'];
    let num1='', num2='';
    let num=0;
    for(let index=0;index<tokens.length;index++){
        num = parseInt(tokens[index]);
        if(validOperaters.includes(tokens[index])){
            if(finalArray.length>=2){
                num1 = finalArray.pop();
                num2 = finalArray.pop();
                finalArray.push(evaluate(num2,num1,tokens[index]));
            }else{
                return [];
            }
            
        } else if(-200<=num<=200){
            finalArray.push(num);
        }
        else {
            return []
        }
    }
    return finalArray;
}
evaluate =(a,b,operator) =>{
    if(operator ==='+'){
        return parseInt(a+b);
    } else if(operator ==='-'){
        return parseInt(a-b);
    }else if (operator === '*'){
        return parseInt(a*b);
    }else if(operator ==='/'){
        return parseInt(a/b);
    }
}
clickHandler = () =>{
    let input1 = ["2","1","+","3","*"];
    let input2 =["4","13","5","/","+"];
    let input3 =["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
    let output = evalRPN(input3);
    document.getElementById("demo").innerHTML = output;
}




// Problem 150 : Reverse Polish Notation

/*
    Use stack, Similar to Paranthesis {[]}()  problem

    Push Numbers in stack
    when you see operator, apply to last two numbers in stack and apply it, in the order in stack.

    Traverse till end of given array and 
    return the last value in array.


*/ 