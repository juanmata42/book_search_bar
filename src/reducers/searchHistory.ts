const searchHistory = (
  state: any = {
    searchHistory:[],
  },
  action: any
) => {
  switch (action.type) {
    case 'SAVE_RESULT':
      return { ...state, searchHistory:[...state.searchHistory,action.payload] };
    default:
      return { ...state };
  }
};
export default searchHistory;
