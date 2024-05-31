import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter and setterfor amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof (value) === 'number') {
      this._amount = value;
    } else {
      throw new TypeError('amount must be a number');
    }
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency) {
      this._currency = value;
    } else {
      throw new TypeError('currency must be a Currency');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
