/**
 * Created by chenying on 16-7-25.
 */
class Promotion {

  constructor(type, barcodes = []) {
    this.type = type;
    this.barcodes = barcodes;
  }

  static promotions() {
    return [
      new Promotion('BUY_TWO_GET_ONE_FREE', ['ITEM000000', 'ITEM000001', 'ITEM000005'])
    ];
  }
}

module.exports = Promotion;
