	var coinChange = function(coins, amount) {

	    coins.sort((a, b) => a - b);

	    const memo = new Map();

	    memo.set(0, 0);

	 

	    const minCoins = (amt) => {

	        if (memo.has(amt)) return memo.get(amt);

	        let minn = Infinity;

	 

	        for (const coin of coins) {

	            const diff = amt - coin;

	            if (diff < 0) break;

	            const res = minCoins(diff);

	            if (res !== Infinity) {

	                minn = Math.min(minn, 1 + res);

	            }

	        }

	 

	        memo.set(amt, minn);

	        return minn;

	    };

	 

	    const result = minCoins(amount);

	    return result < Infinity ? result : -1;

	};

	 
