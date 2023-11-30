threeSum =(nums) =>{
    let outputArray =[];
    const finalValues = new Map();
    let remainTwo;
    nums= nums.sort();
    for(let i=0;i<nums.length;i++){
        if(!finalValues.has(nums[i])){
            finalValues.set(nums[i],i);
            target = nums[i]*-1
            remainTwo = twoSum(nums, target,i);
            for(let len =0; len<remainTwo.length;len++){
                remainTwo[len].push(nums[i]);
            }
            if(remainTwo.length>0){
                outputArray= outputArray.concat(remainTwo);
            }
        }
    }
    return outputArray;
}
twoSum= (nums, target,currentPos) =>{
    // will return other two values that sums up to get target.
    const values = new Map();
    let searchVal;
    returnArr=[];
    let dupExists=false;
    for(let k =currentPos;k<nums.length; k++){
        if(k!=currentPos && k>currentPos){
            searchVal = target-nums[k]
            if(!values.has(searchVal)){
                values.set(nums[k], k);
            }else{
                dupExists=false
                for(let m=0;m<returnArr.length;m++){
                    if(returnArr[m].toString()===([nums[k],nums[values.get(searchVal)]]).toString()){
                        dupExists=true;
                    }
                };
                if(!dupExists){
                    returnArr.push([nums[k],nums[values.get(searchVal)]]);
                }
            }
        }
    }
    return returnArr;
}
clickHandler =()=>{
    let nums1 =[-1,0,1,2,-1,-4];
    let nums2 =[0,0,0,0];
    let nums3 = [0,2,2,3,0,1,2,3,-1,-4,2];
    let target =0;
    let outputArray = threeSum(nums1);
    console.log("Input>>>>", nums1)
    console.log(outputArray);
    document.getElementById("demo").innerHTML =outputArray;
}
