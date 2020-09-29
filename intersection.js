function intersection(nums1, nums2) {
    let intersectionArray = [];
    
    nums1.forEach((num) => {
      if(nums2.includes(num) && !(intersectionArray.includes(num))){
         intersectionArray.push(num);
      }
    });
    
    nums2.forEach((num) =>{
      if(nums1.includes(num) && !(intersectionArray.includes(num))){
         intersectionArray.push(num);
      }
    });
    return intersectionArray;
  }
  
  