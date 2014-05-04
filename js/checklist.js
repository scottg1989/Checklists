function Checklist(name) {
  this.name = name;
}

Checklist.prototype.setName = function (name) {
  this.name = name;
};

Checklist.prototype.getName = function () {
  return this.name;
};