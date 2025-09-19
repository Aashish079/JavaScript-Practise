/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const maxK = piles.reduce((m, v) => (v > m ? v : m), piles[0]);

     let left = 0;
     // upper limit of k will be maximum value of the piles b/c it makes no sense to keep k more than the highest value of piles.
     let right = maxK; 

     //performing binary search on all the possible value of k.
     //O(log(n))
     while(left<= right){
        let midk = Math.floor((left + right)/2);

        // checking if the value works, linear search O(n)
        let hactual = 0;
        for(let i = 0; i< piles.length; i++){
            hactual += Math.ceil(piles[i]/midk);
        }

        if(hactual > h){
            left = midk + 1;
        }
        else{
            right = midk - 1;
        }
     }
return left; // at last when while loop exits left = right = midk

// Asked in Google interview
// Time Complexity : O(nlog(m))
// Space Complexity : O(1)
};
// @lc code=end

