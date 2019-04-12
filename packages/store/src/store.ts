import { combineReducers, createStore } from 'redux';
import todo from './modules/todo';

const reducer = combineReducers({ todo });

export type State = ReturnType<typeof reducer>;
export const initializeStore = () => createStore<State, any, {}, {}>(reducer);
