const geo =(
  state: any = {
    geo: {},
  },
  action: any
) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return { ...state, geo: action.payload };
    default:
      return { ...state };
  }
};
export default geo