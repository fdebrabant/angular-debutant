import {Injectable} from '@angular/core';

export class MenuItem {
  subItems: MenuItem[] = [];

  constructor(public label: string, public url: string, public weight: number = 0) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  items: MenuItem[] = [];

  register(item: MenuItem): void {
    this.items.push(item);
  }

  getItems(): MenuItem[] {
    return this.items.sort((a: MenuItem, b: MenuItem): number => a.weight - b.weight);
  }
}
