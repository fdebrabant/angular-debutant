import {NgModule} from '@angular/core';
import {HighlighterDirective} from './highlighter.directive';
import {GreaterThanFilterPipe} from './greater-than-filter.pipe';

@NgModule({
  declarations: [HighlighterDirective, GreaterThanFilterPipe],
  exports: [HighlighterDirective, GreaterThanFilterPipe]
})
export class SharedModule {
}
