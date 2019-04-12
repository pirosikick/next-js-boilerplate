import { Action } from 'redux';
import { ActionType } from './types';

export interface AddTaskAciton extends Action<ActionType.ADD_TASK> {
  payload: {
    message: string;
  };
}
export const addTask = (message: string): AddTaskAciton => ({
  type: ActionType.ADD_TASK,
  payload: { message }
});

export type TodoAction = AddTaskAciton;
