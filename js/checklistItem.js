function ChecklistItem(name, value) {
  this._name = name;
  this._value = value;
  this._checked = false;
}

ChecklistItem.prototype.setName = function (name) {
  this._name = name;
};

ChecklistItem.prototype.getName = function () {
  return this._name;
};

ChecklistItem.prototype.setValue = function (value) {
  this._value = value;
};

ChecklistItem.prototype.getValue = function () {
  return this._value;
};

ChecklistItem.prototype.setChecked = function (checked) {
  this._checked = checked;
};

ChecklistItem.prototype.isChecked = function () {
  return this._checked;
};

ChecklistItem.prototype.switchChecked = function () {
  this._checked = !this._checked;
};