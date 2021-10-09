export const AppReducer = (state, action) => {
  switch (action.type) {
    case "HIDE":
      return { newClass: "hide", connection: "no-connection" };
    case "SHOW":
      return { newClass: "", connection: "" };

    default:
      return state;
  }
};
