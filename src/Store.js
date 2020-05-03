function Store(initState = {}) {
  this.state = initState;
  this.setState = (state) => {
    this.state = { ...this.state, ...state };
  };
  this.getState = () => {
    return this.state;
  };
}

export default Store;
