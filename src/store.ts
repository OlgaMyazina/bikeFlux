export interface IAction {
  [propName: string]: string | IProps;
}
interface IProps {
  [propName: string]: string;
}
export interface IState {
  [propName: string]: string | IProps;
}
export default class Store {
  reducer: { (state: IState, action: IAction): IState };
  state: IState;
  listeners: { (): void }[];
  constructor(reducer: { (): IAction }, state: IState) {
    this.reducer = reducer;
    this.state = state;
    this.listeners = [];
  }
  getState(): IState {
    return this.state;
  }
  dispatch(action: IAction) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(listener => listener());
    return action;
  }
  subscribe(newListener: { (): void }) {
    this.listeners.push(newListener);
  }
}
