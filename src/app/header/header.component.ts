import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset, Default } from '../store/actions/counter.action';
import { SectionLoad } from '../store/actions/section.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  count$: Observable<any>;
  constructor(private store: Store<{}>) {
    this.store.dispatch(new SectionLoad());
    this.count$ = store.pipe(select('sectionReducer'));
  }

  increment = () => this.store.dispatch(new Increment());
  decrement = () => this.store.dispatch(new Decrement());
  reset = () => this.store.dispatch(new Reset({ home: 0, away: 0 }));
  default = () => this.store.dispatch(new Default());
}
