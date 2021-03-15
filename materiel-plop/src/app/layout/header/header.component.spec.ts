import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header.component';
import { MenuItem, MenuService } from '../menu/menu.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MenuServiceMock {
  items;

  setItems(items: any): void {
    this.items = items;
  }

  getItems(): any[] {
    return this.items;
  }

  hasSubItems(): boolean {
    return this.items.length > 0;
  }
}

describe('LayoutModule - HeaderComponent', () => {

  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [ CommonModule, RouterTestingModule, BrowserAnimationsModule ],
      declarations: [ HeaderComponent ],
      providers: [ { provide: MenuService, useClass: MenuServiceMock } ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });

    fixture = TestBed.createComponent(HeaderComponent);
  });

  it('should render items in menu', () => {
    // Given
    const menuService: MenuService = TestBed.inject(MenuService);
    menuService.items = [ new MenuItem('item1', '/'), new MenuItem('item2', '/'), new MenuItem('item3', '/') ];

    // When
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();

    // Then
    const menuItemElements = fixture.debugElement.queryAll(By.css('ul.main-menu li'));
    expect(menuItemElements.length).toEqual(3);
  });
});
