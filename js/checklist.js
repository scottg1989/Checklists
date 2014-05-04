function Checklist(name) {
  this.name = name;
  this.sections = [];
}

Checklist.prototype.setName = function (name) {
  this.name = name;
};

Checklist.prototype.getName = function () {
  return this.name;
};

Checklist.prototype.getSections = function () {
  return this.sections;
};

Checklist.prototype.addSection = function (section) {
  this.sections.push(section);
};