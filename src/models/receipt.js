/**
 * Created by chenying on 16-7-25.
 */
class Receipt {

  constructor(cartItem, saved=0, subtotal=0) {
    this.cartItem = cartItem;
    this.saved = saved;
    this.subtotal=subtotal;
  }

}

module.exports = Receipt;
