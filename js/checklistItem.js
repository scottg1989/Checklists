function ChecklistItem(name, value) {
  this.name = name;
  this.value = value;
}

ChecklistItem.prototype.setName = function (name) {
  this.name = name;
};

ChecklistItem.prototype.getName = function () {
  return this.name;
};

ChecklistItem.prototype.setValue = function (value) {
  this.value = value;
};

ChecklistItem.prototype.getValue = function () {
  return this.value;
};