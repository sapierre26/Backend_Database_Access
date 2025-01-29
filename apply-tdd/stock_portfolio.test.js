const StockPortfolio = require('./stock_portfolio.js');

test('2.2 Increment - empty portfolio', () => {
        const port = new StockPortfolio();
        expect(port.isEmpty()).toBe(true);
});

//test('2.3 Increment - make a purchase', () => {
  //      const port = new StockPortfolio();
    //    expect(port.isEmpty()).toBe(true);
//});
