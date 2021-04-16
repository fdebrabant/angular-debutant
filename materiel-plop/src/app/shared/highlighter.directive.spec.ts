import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HighlighterDirective} from './highlighter.directive';
import {By} from '@angular/platform-browser';

@Component({template: '<p mpHighlighter="blue"></p>'})
class FakeComponent {
}

describe('HighlighterDirective', () => {

  let fixture: ComponentFixture<FakeComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighlighterDirective, FakeComponent]
    });
    fixture = TestBed.createComponent(FakeComponent);
    fixture.detectChanges();
  });

  it('Should set display inline-block on element', () => {
    expect(fixture.debugElement.query(By.css('p')).nativeElement.style.display).toBe('inline-block');
  });

  it('Should set background color on mouse enter', () => {
    // given
    const debugElement = fixture.debugElement.query(By.css('p'));

    // when
    debugElement.triggerEventHandler('mouseenter', null);

    // then
    expect(debugElement.nativeElement.style.backgroundColor).toBe('blue');
  });

  it('Should set background color on mouse enter', () => {
    // given
    const debugElement = fixture.debugElement.query(By.css('p'));
    debugElement.nativeElement.style.backgroundColor = 'blue';

    // when
    debugElement.triggerEventHandler('mouseleave', null);

    // then
    expect(debugElement.nativeElement.style.backgroundColor).toBe('');
  });
});
