/*global describe, expect, beforeEach, it, Checklist */

describe('Checklist', function () {
  var checklist;

  beforeEach(function () {
    checklist = new Checklist();
  });

  it('has a name', function () {
    checklist.setName('test checklist');
    expect(checklist.getName()).toEqual('test checklist');

    checklist = new Checklist('second!');
    expect(checklist.getName()).toEqual('second!');

    checklist.setName('third name..');
    expect(checklist.getName()).toEqual('third name..');
  });

  it('is able to have sections added to it', function () {
    expect(checklist.getSections().length).toEqual(0);

    checklist.addSection(new ChecklistSection());
    expect(checklist.getSections().length).toEqual(1);

    checklist.addSection(new ChecklistSection());
    expect(checklist.getSections().length).toEqual(2);
  });
});
