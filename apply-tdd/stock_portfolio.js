class StockPortfolio {
	constructor() {
		this.num_shares = [];
	}

	isEmpty() {
		return this.num_shares.length === 0;
	}
}

module.exports = StockPortfolio;
