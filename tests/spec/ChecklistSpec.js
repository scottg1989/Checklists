/*global describe, expect, beforeEach, it, Checklist, ChecklistSection */

describe('Checklist', function () {
  var checklist;

  beforeEach(function () {
    checklist = new Checklist();
  });

  it('has an id', function () {
    checklist.setId(3);
    expect(checklist.getId()).toEqual(3);

    checklist = new Checklist(5);
    expect(checklist.getId()).toEqual(5);
  });

  it('has a name', function () {
    checklist.setName('test checklist');
    expect(checklist.getName()).toEqual('test checklist');

    checklist = new Checklist(0, 'second!');
    expect(checklist.getName()).toEqual('second!');

    checklist.setName('third name..');
    expect(checklist.getName()).toEqual('third name..');
  });

  it('has an image url', function () {
    checklist.setImageUrl('exampleimage.png');
    expect(checklist.getImageUrl()).toEqual('exampleimage.png');
  });

  it('is able to have sections added to it', function () {
    expect(checklist.getSections().length).toEqual(0);

    checklist.addSection(new ChecklistSection());
    expect(checklist.getSections().length).toEqual(1);

    checklist.addSection(new ChecklistSection());
    expect(checklist.getSections().length).toEqual(2);
  });

  it('can take a collection of sections in it\'s constructor', function () {
    checklist = new Checklist(0, '', [
      new ChecklistSection(),
      new ChecklistSection()
    ]);

    expect(checklist.getSections().length).toEqual(2);
  });
});
