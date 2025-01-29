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

test('2.4 Increment - make a sale', () => {
        const port = new StockPortfolio();
        port.make_purchase("Stock", 35);
	port.make_sale("Stock", 17);
        expect(port.num_shares["Stock"]).toBe(18);
});

test('2.5 Increment - count unique symbols', () => {
        const port = new StockPortfolio();
	port.make_purchase("RBLX", 10);
        port.make_purchase("GMR", 5);
        expect(port.count_unique_symbols()).toBe(2);
});

test('2.6 Increment - keep only owned symbols', () => {
        const port = new StockPortfolio();
        port.make_purchase("RBLX", 10);
        port.make_sale("RBLX", 10);
        expect(port.num_shares["RBLX"]).toBeUndefined();
});
