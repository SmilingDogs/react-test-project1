export const AppReducer = (state, action) => {
    switch (action.type) {
      case "HIDE":
        return {newClass: "hide"};

        default:
        return state;
    }
  };
