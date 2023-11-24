searchRange = (nums, target) =>{
    bstSearch =(nums,target,isfwd) =>{
        let start =0;
        let end = nums.length-1;
        let mid = 0;

        let index = -1;
        while( start<=end){
            mid = Math.floor((start + end)/2)
            if(target === nums[mid]){
                if(isfwd){
                    index= mid;
                    end=mid-1;
                } else{
                    index=mid;
                    start=mid+1;
                }

            }else if( target < nums[mid]){
                end = mid-1;
            }else if( target > nums[mid]){
                start = mid+1;
            }
        }
        return index;
    }

    const left = bstSearch(nums,target,true);
    const right =bstSearch(nums,target,false);
    
    return [left,right];
}

clickHandler = () =>{
    let arr =[2,2,2,2,2,2,2,2,3,4,4,5,6,6,7,7,7]
    let target =7;

    document.getElementById("demo").innerHTML =searchRange(arr,target);    
}

/*  
    Problem: 34
    Algorithm 
    Binary Serach Tree

    Forward Lookup 
    Backword Lookup

*/

