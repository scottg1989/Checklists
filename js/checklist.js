function Checklist(id, name, sections) {
  this._id = id;
  this._name = name;
  this._sections = (sections === undefined ? [] : sections);
}

Checklist.prototype.setId = function (id) {
  this._id = id;
};

Checklist.prototype.getId = function () {
  return this._id;
};

Checklist.prototype.setName = function (name) {
  this._name = name;
  this._imageUrl = '';
};

Checklist.prototype.getName = function () {
  return this._name;
};

Checklist.prototype.setImageUrl = function (imageUrl) {
  this._imageUrl = imageUrl;
};

Checklist.prototype.getImageUrl = function () {
  return this._imageUrl;
};

Checklist.prototype.getSections = function () {
  return this._sections;
};

Checklist.prototype.addSection = function (section) {
  this._sections.push(section);
};