
twoSum =(nums,target) =>{
    const values = new Map(); // value:index
    let searchVal;
    for(let index=0; index<nums.length;index++){
        searchVal = target-nums[index];
        if(!values.has(searchVal)){
            values.set(nums[index],index);
        }else{
            return [index,values.get(searchVal)]
        }
    }
    return [-1]
}


clickHandler =()=>{
    let nums =[2,7,11,15];
    let target =9;
    let outputArray = twoSum(nums,target);
    document.getElementById("demo").innerHTML =outputArray;
}

/*
    Problem:1
    Using HashMap Set.
    traverse array,
    store the (value): (index) in map if
    the target-current value is not present map where value is visited number and index is index of that number array
    if its presented means we got the both values.
*/