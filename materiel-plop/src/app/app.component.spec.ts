import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Component} from '@angular/core';

@Component({selector: 'mp-layout', template: ''})
class LayoutStubComponent {
}

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        LayoutStubComponent
      ],
    });
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should create a mp-layout instance`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('mp-layout')).not.toBe(null);
  }));
});
