export default class Store {
    constructor(reducer, state) {
        this.reducer = reducer;
        this.state = state;
        this.listeners = [];
    }
    getState() {
        return this.state;
    }
    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => listener());
        return action;
    }
    subscribe(newListener) {
        this.listeners.push(newListener);
    }
}
//# sourceMappingURL=store.js.map