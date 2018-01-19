import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HighlighterDirective} from './highlighter.directive';
import {GreaterThanFilterPipe} from './greater-than-filter.pipe';
import {CounterComponent} from './counter.component';

@NgModule({
  imports: [FormsModule],
  declarations: [HighlighterDirective, GreaterThanFilterPipe, CounterComponent],
  exports: [HighlighterDirective, GreaterThanFilterPipe, CounterComponent]
})
export class SharedModule {
}
