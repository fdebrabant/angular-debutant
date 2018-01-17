import {Injectable} from '@angular/core';

export class MenuItem {
  label: string;
  url: string;
  subItems: MenuItem[] = [];

  constructor(label: string, url: string) {
    this.label = label;
    this.url = url;
  }

  addSubItem(subItem: MenuItem): void {
    this.subItems.push(subItem);
  }

  hasSubItems(): boolean {
    return this.subItems.length > 0;
  }
}

@Injectable()
export class MenuService {
  items: MenuItem[] = [];

  register(item: MenuItem): void {
    this.items.push(item);
  }

  getItems(): MenuItem[] {
    return this.items;
  }
}
