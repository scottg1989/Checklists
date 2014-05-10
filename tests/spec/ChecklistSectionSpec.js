/*global describe, expect, beforeEach, it, ChecklistSection, ChecklistItem */

describe('ChecklistSection', function () {
  var section;

  beforeEach(function () {
    section = new ChecklistSection();
  });

  it('has an id', function () {
    section.setId(3);
    expect(section.getId()).toEqual(3);

    section = new ChecklistSection(5);
    expect(section.getId()).toEqual(5);
  });

  it('has a name', function () {
    section.setName('test section');
    expect(section.getName()).toEqual('test section');

    section = new ChecklistSection(0, 'second!');
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

  it('can return a count of it\'s items', function () {
    section.addItem(new ChecklistItem());
    section.addItem(new ChecklistItem());
    section.addItem(new ChecklistItem());

    expect(section.getItemCount()).toEqual(3);
  });

  it('can return a count of it\'s unchecked items', function () {
    section.addItem(new ChecklistItem());
    section.addItem(new ChecklistItem());
    section.addItem(new ChecklistItem());
    section.addItem(new ChecklistItem('', '', false));

    section.getItems()[0].setChecked(true);

    expect(section.getUncheckedItemCount()).toEqual(2);
  });

  it('can take a collection of items in it\'s constructor', function () {
    section = new ChecklistSection(0, '', [
      new ChecklistItem(),
      new ChecklistItem()
    ]);

    expect(section.getItems().length).toEqual(2);
  });

});
