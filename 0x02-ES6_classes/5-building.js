export default class Building {
  constructor(sqft) {
    if (new.target !== Building
      && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter and setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof (sqft) === 'number') {
      this._sqft = value;
    } else {
      throw new TypeError('sqft must be a number');
    }
  }
}
