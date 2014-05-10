function ChecklistItem(name, value, checkable) {
  this._name = name;
  this._value = value;
  this._checked = false;
  this._checkable = (checkable !== undefined ? checkable : true);
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

ChecklistItem.prototype.setCheckable = function (checkable) {
  this._checkable = checkable;
};

ChecklistItem.prototype.isCheckable = function () {
  return this._checkable;
};