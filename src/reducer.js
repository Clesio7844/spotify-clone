export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE after finished developing...
  token:
    'QD9ux3-PzzSKNubdA6WH87qWLTsgMkO4jdNNKBqrk_DkT3bHql2mUqm7lQ4T9PA_BDStPJNa7mcEbmgfyQUmtH7P1zXZ0NN5ykGuf-h40j1Ri8pSHKOuo4dVSmWcDV6sUgXWYQVA0_UJn6dFvu2wmNtg5JM7yY9HSD0GAlQcylYp9XJ'
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };
    default:
      return state;
  }
};

export default reducer;
