import { Action } from '@ngrx/store';
import { Resort } from '../resorts/shared/resort.model';

export const ADD_RESORT = 'ADD_RESORT';

export class AddResort implements Action {
    readonly type = ADD_RESORT;
    payload: Resort;
}
