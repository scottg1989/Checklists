/*global describe, expect, beforeEach, it, ChecklistItem */

describe('ChecklistItem', function () {
  var item;

  beforeEach(function () {
    item = new ChecklistItem();
  });

  it('has a name and a value', function () {
    item.setName('test name');
    expect(item.getName()).toEqual('test name');

    item.setValue('test value');
    expect(item.getValue()).toEqual('test value');

    item = new ChecklistItem('name', 'value');
    expect(item.getName()).toEqual('name');
    expect(item.getValue()).toEqual('value');

    item.setName('third name');
    expect(item.getName()).toEqual('third name');

    item.setValue('third value');
    expect(item.getValue()).toEqual('third value');
  });

  it('can be checked', function () {
    expect(item.isChecked()).toEqual(false);

    item.setChecked(true);
    expect(item.isChecked()).toEqual(true);

    item.setChecked(false);
    expect(item.isChecked()).toEqual(false);
  });

  it('supports simple switch check call', function () {
    expect(item.isChecked()).toEqual(false);

    item.switchChecked();
    expect(item.isChecked()).toEqual(true);

    item.switchChecked();
    expect(item.isChecked()).toEqual(false);
  });
});
