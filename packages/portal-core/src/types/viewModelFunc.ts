type ViewModelFunc<State, Action, Argument extends object | void = void> = (args: Argument) => {
  state: State;
  action: Action;
};

export { type ViewModelFunc };
