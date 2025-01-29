const StockPortfolio = require('./stock_portfolio.js');

test('2.2 Increment - empty portfolio', () => {
        const port = new StockPortfolio();
        expect(port.isEmpty()).toBe(true);
});

test('2.3 Increment - make a purchase', () => {
        const port = new StockPortfolio();
	port.make_purchase("Stock", 35);
        expect(port.num_shares["Stock"]).toBe(35);
});

test('2.4 Increment - make a purchase', () => {
        const port = new StockPortfolio();
        port.make_purchase("Stock", 35);
	port.make_sale("Stock", 17);
        expect(port.num_shares["Stock"]).toBe(18);
});
