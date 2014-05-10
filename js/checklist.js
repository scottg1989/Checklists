function Checklist(id, name, sections) {
  var _id = id;
  var _name = name;
  var _sections = (sections === undefined ? [] : sections);
  var _imageUrl = '';

  this.setId = function (id) {
    _id = id;
  };

  this.getId = function () {
    return _id;
  };

  this.setName = function (name) {
    _name = name;
    _imageUrl = '';
  };

  this.getName = function () {
    return _name;
  };

  this.setImageUrl = function (imageUrl) {
    _imageUrl = imageUrl;
  };

  this.getImageUrl = function () {
    return _imageUrl;
  };

  this.getSections = function () {
    return _sections;
  };

  this.addSection = function (section) {
    _sections.push(section);
  };
}