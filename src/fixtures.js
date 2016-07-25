const cartItems = require('./models/cartItems');
const promotion = require('./models/promotions');
function loadAllItems() {
  return [
    new cartItems('ITEM000000', '可口可乐', '瓶', 3.00),
    new cartItems('ITEM000001', '雪碧', '瓶', 3.00),
    new cartItems('ITEM000002', '苹果', '斤', 5.50),
    new cartItems('ITEM000003', '荔枝', '斤', 15.00),
    new cartItems('ITEM000004', '电池', '个', 2.00),
    new cartItems('ITEM000005', '方便面', '袋', 4.50)
  ];
}

function loadPromotions() {
  return [
     new promotion('BUY_TWO_GET_ONE_FREE', ['ITEM000000', 'ITEM000001', 'ITEM000005'])
  ];
}

exports.loadAllItems = loadAllItems;
exports.loadPromotions = loadPromotions;
