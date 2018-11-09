export default class Store {
  reducer: { (state: object, action: object): object };
  state: object;
  listeners: { (): void }[];
  constructor(reducer: { (): object }, state: object) {
    this.reducer = reducer;
    this.state = state;
    this.listeners = [];
  }
  getState() {
    return this.state;
  }
  dispatch(action: object) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener());
    return action;
  }
  subscribe(newListener: { (): void }) {
    this.listeners.push(newListener);
  }
}
