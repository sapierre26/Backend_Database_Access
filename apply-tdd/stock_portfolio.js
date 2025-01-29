class StockPortfolio {
	constructor() {
		this.num_shares = [];
	}

	isEmpty() {
		return this.num_shares.length === 0;
	}

	make_purchase(symbol, shares) {
		if (!(symbol in this.num_shares)) {
			this.num_shares[symbol] = 0;
		}
		this.num_shares[symbol] += shares;
	}

	make_sale(symbol, shares) {
		this.num_shares[symbol] -= shares;
	}
}

module.exports = StockPortfolio;
