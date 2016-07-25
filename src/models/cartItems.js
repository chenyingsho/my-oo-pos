class CartItems {

  constructor(barcode, name, unit, price = 0) {
    this.barcode = barcode;
    this.name = name;
    this.unit = unit;
    this.price = price;
  }

  static item() {
    return [
      new CartItems('ITEM000000', '可口可乐', '瓶', 3.00),
      new CartItems('ITEM000001', '雪碧', '瓶', 3.00),
      new CartItems('ITEM000002', '苹果', '斤', 5.50),
      new CartItems('ITEM000003', '荔枝', '斤', 15.00),
      new CartItems('ITEM000004', '电池', '个', 2.00),
      new CartItems('ITEM000005', '方便面', '袋', 4.50)
    ];
  }
  static buildCartItems(tags, allItems) {

  const cartItems = [];

  for (const tag of tags) {

    const tagArray = tag.split('-');
    const barcode = tagArray[0];
    const count = parseFloat(tagArray[1] || 1);

    const cartItem = cartItems.find(cartItem => cartItem.item.barcode === barcode);

    if (cartItem) {
      cartItem.count += count;
    } else {
      const item = allItems.find(item => item.barcode === barcode);
      cartItems.push({item, count});
    }
  }

  return cartItems;
}
}

module.exports = CartItems;
