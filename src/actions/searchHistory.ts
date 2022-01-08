export const saveSearchResult = (result:{keyword:string,resultsList:any}) => async (dispatch: any) => {
  try {
    dispatch({ type: 'SAVE_RESULT', payload: result });
  } catch (error) {
    console.log(error);
  }
};
