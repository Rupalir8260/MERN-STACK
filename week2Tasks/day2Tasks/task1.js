const prices = [120, 250, 300, 450, 600];
const filteredPrices = prices.filter(price => price > 250);//filter
const discountedPrices = filteredPrices.map(price => price * 0.9)//map
console.log("Original Prices:", prices); 
console.log("Filtered Prices:", filteredPrices);
console.log("Discounted Prices:", discountedPrices);