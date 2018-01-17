import {MenuService, MenuItem} from './menu.service';

describe('LayoutModule - MenuService', () => {

  it('Should had no item on init', (done: any) => {

    const service = new MenuService();
    expect(service.getItems().length).toBe(0);
    done();
  });

  it('Should add items to menu', (done: any) => {

    // given
    const service = new MenuService();

    // when
    service.register(new MenuItem('test', '/test'));
    service.register(new MenuItem('test2', '/test2'));

    // then
    expect(service.getItems().length).toBe(2);
    done();
  });

  it('Should not have subItem on init', (done: any) => {
    const menuItem = new MenuItem('test', '/test');
    expect(menuItem.hasSubItems()).toBe(false);
    done();
  });

  it('Should register sub item', (done: any) => {

    // given
    const menuItem = new MenuItem('test', '/test');

    // when
    menuItem.addSubItem(new MenuItem('test2', '/test2'));

    // then
    expect(menuItem.hasSubItems()).toBe(true);
    done();
  });
});
