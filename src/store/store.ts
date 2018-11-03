//import allReducerInterface from '../reducer';

export default class Store {
  reducer: any;
  state: any;
  listeners: { (): void }[];
  constructor(reducer: any, state: any) {
    this.reducer = reducer;
    this.state = state;
    this.listeners = [];
  }
  getState() {
    return this.state;
  }
  dispatch(action: any) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener());
    return action;
  }
  subscribe(newListener: any) {
    this.listeners.push(newListener);
  }
}
