import React from "react";
import Header from "../modules/header/header";
import Main from "../modules/main/main";
import Footer from "../modules/footer/footer";
import {useSelector} from "react-redux";

export const MainPage = () => {

//     let array = [-1,0,3,5,7,9,12,];
//
// let search = (nums,target) => {
//   let left = 0;
//   let right = nums.length - 1;
//   let mid;
//
//   while (left<= right) {
//       mid = Math.round((right-left)/2 + left);
//       console.log('left',left)
//       console.log('mid', mid)
//       console.log('right',right)
//       if(target === nums[mid]) {
//           return mid;
//       } else if (target < nums[mid]) {
//           right = mid - 1;
//       } else {
//           left = mid + 1;
//       }
//   }
//
//   return -1;
// };
//  console.log(search(array,9));
    const basketItems = useSelector((state) => state.basketItems.basketItems);
    console.log('basketItems',basketItems)

    // const initialArray = [1,2,3,4,5,6,7,8,9,10];
    // console.log(initialArray.filter(item => item !== 1))
    return (
<>
        <Header/>
            <Main />
            <Footer/>
        </>
    );
};
export default MainPage;
