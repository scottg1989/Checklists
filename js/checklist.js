function Checklist(name, sections) {
  this._name = name;
  this._sections = (sections === undefined ? [] : sections);
}

Checklist.prototype.setName = function (name) {
  this._name = name;
};

Checklist.prototype.getName = function () {
  return this._name;
};

Checklist.prototype.getSections = function () {
  return this._sections;
};

Checklist.prototype.addSection = function (section) {
  this._sections.push(section);
};