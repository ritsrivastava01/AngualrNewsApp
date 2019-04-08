import { Component, OnInit } from '@angular/core';
import { State, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  sectionList: Observable<any>;
  constructor(private state: State<{}>) {
    this.sectionList = this.state.pipe(select('sectionReducer'));
  }

  ngOnInit() {
  }

}
