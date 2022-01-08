const searchHistory = (
  state: any = {
    searchHistory: {},
  },
  action: any
) => {
  switch (action.type) {
    case 'ADD_RESULT':
      return { ...state, searchHistory: action.payload };
    default:
      return { ...state };
  }
};
export default searchHistory;
