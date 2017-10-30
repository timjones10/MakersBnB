function Property(title) {
this._title = title;
}

Property.prototype.title = function() {
  return this._title;
};
