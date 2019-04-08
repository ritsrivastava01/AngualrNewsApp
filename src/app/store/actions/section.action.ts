import { Action } from '@ngrx/store';

export const LOAD_SECTIONS = '[Section] LOAD_SECTIONS';

export class SectionLoad implements Action {
    readonly type = LOAD_SECTIONS;
}
