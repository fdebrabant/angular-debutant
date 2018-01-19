import {TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {By} from '@angular/platform-browser';

import {HeaderComponent} from './header.component';
import {MenuService, MenuItem} from '../menu/menu.service';
import {CollapseModule} from 'ngx-bootstrap';
import {NO_ERRORS_SCHEMA} from '@angular/core';

const menuServiceMock = {
  setItems: (items: any): void => {
    this.items = items;
  },
  getItems: (): any[] => this.items,
  hasSubItems: (): boolean => this.items.length > 0
};

describe('LayoutModule - HeaderComponent', () => {

  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule, CollapseModule.forRoot()],
      declarations: [HeaderComponent],
      providers: [{provide: MenuService, useValue: menuServiceMock}],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HeaderComponent);
  });

  it('should render items in menu', () => {
    // Given
    menuServiceMock.setItems([new MenuItem('item1', '/'), new MenuItem('item2', '/'), new MenuItem('item3', '/')]);

    // When
    fixture.componentInstance.ngOnInit();
    fixture.detectChanges();

    // Then
    const menuItemElements = fixture.debugElement.queryAll(By.css('ul.main-menu li'));
    expect(menuItemElements.length).toEqual(3);
  });
});
