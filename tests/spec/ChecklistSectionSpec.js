/*global describe, expect, beforeEach, it, ChecklistSection */

describe('ChecklistSection', function () {
  var section;

  beforeEach(function () {
    section = new ChecklistSection();
  });

  it('has a name', function () {
    section.setName('test section');
    expect(section.getName()).toEqual('test section');

    section = new ChecklistSection('second!');
    expect(section.getName()).toEqual('second!');

    section.setName('third name..');
    expect(section.getName()).toEqual('third name..');
  });

  it('is able to have items added to it', function () {
    expect(section.getItems().length).toEqual(0);

    section.addItem(new ChecklistItem());
    expect(section.getItems().length).toEqual(1);

    section.addItem(new ChecklistItem());
    expect(section.getItems().length).toEqual(2);
  });
});
