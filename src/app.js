const CartItem = require('./models/cartItems');
const promotion = require('./models/promotions');
const receipts = require('./models/receipt');
const totalPriceReceipt = require('./models/totalPriceReceipt');


function printReceipt(tags) {

  const cartItems = CartItem.buildCartItems(tags, CartItem.item());

  const receiptItems = receipts.buildReceiptItems(cartItems, promotion.promotions());

  const receipt = totalPriceReceipt.buildReceipt(receiptItems);

  const receiptText = receipt.buildReceiptText();

  console.log(receiptText);
}


/*function buildReceiptText(receipt) {

  let receiptItemsText = receipt.receiptItems
    .map(receiptItem => {
      const cartItem = receiptItem.cartItem;
      return `名称：${cartItem.item.name}，\
数量：${cartItem.count}${cartItem.item.unit}，\
单价：${formatMoney(cartItem.item.price)}(元)，\
小计：${formatMoney(receiptItem.subtotal)}(元)`;
    })
    .join('\n');

  return `***<没钱赚商店>收据***
${receiptItemsText}
----------------------
总计：${formatMoney(receipt.total)}(元)
节省：${formatMoney(receipt.savedTotal)}(元)
**********************`;
}

function formatMoney(money) {
  return money.toFixed(2);
}*/

exports.printReceipt = printReceipt;
