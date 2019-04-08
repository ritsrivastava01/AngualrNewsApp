import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset, Default } from '../store/actions/counter.action';
import { State } from '../store/reducers/counter.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  count$: Observable<State>;
  constructor(private store: Store<{}>) {
    store.pipe(select('data')).subscribe(x => console.log(x));
    this.count$ = store.pipe(select('data'));
  }

  increment = () => this.store.dispatch(new Increment());
  decrement = () => this.store.dispatch(new Decrement());
  reset = () => true;// this.store.dispatch(new ());
  default = () => this.store.dispatch(new Default());
}
