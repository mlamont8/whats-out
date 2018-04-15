const initialLoading = {
  loading: false
};

const isLoading = (state = initialLoading, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        loading: action.isLoading
      };
    default:
      return state;
  }
};

export default isLoading;
