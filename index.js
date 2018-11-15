const Logger = require('./singleton-Logger'); 
const Shopper = require('./singleton-Shopper'); 
const Store = require('./singleton-Store'); 

let logger = new Logger(); 

logger.log('starting app...'); 

let larry = new Shopper('Larry', 900);
let music_store = new Store('Best production gear this side of creation', [
  {
    item: 'Moog One', 
    qty: 5, 
    price: 7500
  },
  {
    item: 'Motif XS', 
    qty: 13,
    price: 2799
  }
]); 

logger.log('Finished config..'); 

console.log(`${logger.count} logs total`); 

