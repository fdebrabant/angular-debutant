import { TestBed, waitForAsync } from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Component} from '@angular/core';

@Component({selector: 'mp-layout', template: ''})
class LayoutStubComponent {
}

describe('AppComponent', () => {

  beforeEach(waitForAsync(() => {
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

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should create a mp-layout instance`, waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('mp-layout')).not.toBe(null);
  }));
});
