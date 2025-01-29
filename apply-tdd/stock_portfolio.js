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
		if (this.num_shares[symbol] <= 0) {
			delete this.num_shares[symbol];
		}
	}

	count_unique_symbols() {
		let counter = 0;
		for (let symbol in this.num_shares) {
			counter++;
		}
		return counter;
	}

	get_shares(symbol) {
		return this.num_shares[symbol] || 0;
	}
}

module.exports = StockPortfolio;
