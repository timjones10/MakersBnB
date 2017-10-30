function User() {
  this._properties = []
  this._requestedProperties = []
};

User.prototype.properties = function() {
  return this._properties;
}

User.prototype.addProperty = function(property) {
   this._properties.push(property);
}

User.prototype.requestProperty = function(property) {
   this._requestedProperties.push(property);
}

User.prototype.requestedProperties = function() {
  return this._requestedProperties;
}
