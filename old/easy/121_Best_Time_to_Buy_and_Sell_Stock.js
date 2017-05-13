/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	var min = prices[0];
	var max = prices[0];
	var profit = 0;

	for(var i = 1; i < prices.length; i++) {
		var currentPrice = prices[i];

		if(currentPrice < min) {
			min = currentPrice;
		} else {
			max = currentPrice;
			var currentProfit = max - min;
			profit = Math.max(profit, currentProfit);
		}
	}

	return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
