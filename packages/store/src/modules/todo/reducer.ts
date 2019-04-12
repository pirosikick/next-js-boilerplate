import produce from 'immer';
import { ActionType } from './types';
import { TodoAction } from './actions';

export interface TodoState {
  tasks: Array<{
    message: string;
    done: boolean;
  }>;
}
const intialState = {
  tasks: []
};

const todoReducer = (state: TodoState = intialState, action: TodoAction) =>
  produce<TodoState>(state, draft => {
    if (action.type === ActionType.ADD_TASK) {
      draft.tasks.push({
        message: action.payload.message,
        done: false
      });
    }
  });

export default todoReducer;
