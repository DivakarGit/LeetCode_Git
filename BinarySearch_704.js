search =(nums,target)=>{
    let mid=0;
    let start=0;
    let end=nums.length-1;
    while(start<=end){
        mid= Math.floor((start+end)/2);

        if(target>nums[mid]){
            start =mid+1;
        }else if(target<nums[mid]){
            end =mid-1;
        }else if(target===nums[mid]){
            return mid;
        }
    }
    return -1;
}


clickHandler = () =>{
    let nums1 = [-1,0,3,5,9,12];
    let target1 =2
    let nums2 = [-1,0,3,5,9,12];
    let target2 =2
    let output = search(nums1,target1);
    document.getElementById("demo").innerHTML = output;
}
