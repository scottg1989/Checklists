function ChecklistSection(id, name, items) {
  this._id = id;
  this._name = name;
  this._items = (items === undefined ? [] : items);
}

ChecklistSection.prototype.setId = function (id) {
  this._id = id;
};

ChecklistSection.prototype.getId = function () {
  return this._id;
};

ChecklistSection.prototype.setName = function (name) {
  this._name = name;
};

ChecklistSection.prototype.getName = function () {
  return this._name;
};

ChecklistSection.prototype.addItem = function (item) {
  this._items.push(item);
};

ChecklistSection.prototype.getItems = function () {
  return this._items;
};

ChecklistSection.prototype.getItemCount = function () {
  return this.getItems().length;
};

ChecklistSection.prototype.getUncheckedItemCount = function () {
  return _.filter(this.getItems(), function (item) {
    return !item.isChecked();
  }).length;
};