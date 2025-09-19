/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// Brute Force Solution
// Time Complexity : O(N^2)
// var maxProfit = function(prices) {
//     let maxProfit = 0;

//     // Iterate through each day to consider it as a potential buy day.
//     for (let i = 0; i < prices.length - 1; i++) {
//         // Iterate through the subsequent days to consider them as potential sell days.
//         for (let j = i + 1; j < prices.length; j++) {
//             // Calculate the profit if we buy on day 'i' and sell on day 'j'.
//             const currentProfit = prices[j] - prices[i];

//             // If the current profit is greater than the max profit found so far, update it.
//             if (currentProfit > maxProfit) {
//                 maxProfit = currentProfit;
//             }
//         }
//     }

//     return maxProfit;
// };
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let maxProfit = 0;

    // Iterating until the right pointer reaches the last item
    while (right < prices.length) {
        // Check for a profitable transaction.
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]; // Calculate profit
            maxProfit = Math.max(maxProfit, profit);
        } else {
            // If the price at the right pointer is lower than the left,
            // it's a new potential best day to buy.
            // So, move the left pointer to the right pointer's position.
            left = right;
        }
        // Always move the sell pointer to the right to explore new prices.
        right++;
    }

    return maxProfit;
};
// @lc code=end

