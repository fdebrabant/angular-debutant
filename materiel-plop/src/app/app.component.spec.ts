import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {LayoutModule} from './layout/layout.module';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
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
