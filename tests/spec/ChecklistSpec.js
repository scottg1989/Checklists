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
});
