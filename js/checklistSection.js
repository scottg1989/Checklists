function ChecklistSection(name) {
  this.name = name;
  this.items = [];
}

ChecklistSection.prototype.setName = function (name) {
  this.name = name;
};

ChecklistSection.prototype.getName = function () {
  return this.name;
};

ChecklistSection.prototype.getItems = function () {
  return this.items;
};

ChecklistSection.prototype.addItem = function (item) {
  this.items.push(item);
};