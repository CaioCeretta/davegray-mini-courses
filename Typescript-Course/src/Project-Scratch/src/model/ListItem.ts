export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  // private _id: string;
  // private _item: string;
  // private _checked: boolean;

  // constructor(id: string = '', item: string = '', checked: boolean = false) {
  //   this._id = id;
  //   this._item = item;
  //   this._checked = checked
  // }
  // These will result in the same thing

  constructor(
      private _id: string = '',
      private _item: string = '',
      private _checked: boolean = false) {}

  get id() {
    return this._id;
  }

  set id(value: string) {
    this.id = value;
  }

  get item() {
    return this._item;
  }

  set item(item: string) {
    this._item = item
  }

  get checked() {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked
  }

}