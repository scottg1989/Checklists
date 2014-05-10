function ChecklistSection(id, name, items) {
  var _id = id;
  var _name = name;
  var _items = (items === undefined ? [] : items);

  this.setId = function (id) {
    _id = id;
  };

  this.getId = function () {
    return _id;
  };

  this.setName = function (name) {
    _name = name;
  };

  this.getName = function () {
    return _name;
  };

  this.addItem = function (item) {
    _items.push(item);
  };

  this.getItems = function () {
    return _items;
  };

  this.getItemCount = function () {
    return this.getItems().length;
  };

  this.getUncheckedItemCount = function () {
    return _.filter(this.getItems(), function (item) {
      return item.isCheckable() && !item.isChecked();
    }).length;
  };
}