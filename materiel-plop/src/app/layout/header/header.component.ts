import {Component, OnInit} from '@angular/core';
import {MenuService, MenuItem} from '../menu/menu.service';

@Component({
  selector: 'mp-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  menuItems: MenuItem[];
  isCollapsed: boolean;

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuItems = this.menuService.getItems();
  }
}
