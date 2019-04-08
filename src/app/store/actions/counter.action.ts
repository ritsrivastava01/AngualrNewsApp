import { Action } from '@ngrx/store';

export enum ActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
  Default = '[counter component] default value',
}

export class Increment implements Action {
  readonly type = ActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = ActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
  constructor(public payload: { home: number, away: number }) { }
}
export class Default implements Action {
  readonly type = ActionTypes.Default;
}

export type ActionsUnion = Increment | Decrement | Reset | Default;
