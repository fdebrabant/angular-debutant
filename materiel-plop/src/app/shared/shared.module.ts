import {NgModule} from '@angular/core';
import {HighlighterDirective} from './highlighter.directive';

@NgModule({
  declarations: [HighlighterDirective],
  exports: [HighlighterDirective]
})
export class SharedModule {
}
