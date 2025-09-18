/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // find the row in O(log(n))
    let left = 0;
    let right = rows - 1;
    let mid;
    
    while( left <= right){
        mid = Math.floor((left + right)/2)

        if(matrix[mid][0] < target){
            if(matrix[mid][cols -1] >= target){
                break;
            }
            left = mid + 1 ;
        }
        else if(matrix[mid][0] > target){
            right = mid - 1;
        }
        else{
            break;
        }
    }
    // find the value in O(log(m))

    left = 0
    right = cols - 1
    while (left <= right){
        let mid2 = Math.floor((left + right)/2);

        if(matrix[mid][mid2]<target){
            left = mid2 + 1;

        }
        else if (matrix[mid][mid2]>target){
            right = mid2 - 1;
        }
        else{
            return true;
        }
    }

    return false;
};
// @lc code=end

