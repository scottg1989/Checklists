function ChecklistSection(name, items) {
  this._name = name;
  this._items = (items === undefined ? [] : items);
}

ChecklistSection.prototype.setName = function (name) {
  this._name = name;
};

ChecklistSection.prototype.getName = function () {
  return this._name;
};

ChecklistSection.prototype.getItems = function () {
  return this._items;
};

ChecklistSection.prototype.addItem = function (item) {
  this._items.push(item);
};