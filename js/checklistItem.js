function ChecklistItem(name, value, checkable) {
  var _name = name;
  var _value = value;
  var _checked = false;
  var _checkable = (checkable !== undefined ? checkable : true);

  this.setName = function (name) {
    _name = name;
  };

  this.getName = function () {
    return _name;
  };

  this.setValue = function (value) {
    _value = value;
  };

  this.getValue = function () {
    return _value;
  };

  this.setChecked = function (checked) {
    _checked = checked;
  };

  this.isChecked = function () {
    return _checked;
  };

  this.switchChecked = function () {
    _checked = !_checked;
  };

  this.setCheckable = function (checkable) {
    _checkable = checkable;
  };

  this.isCheckable = function () {
    return _checkable;
  };
}