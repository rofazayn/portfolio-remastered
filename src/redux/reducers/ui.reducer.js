const initialUiState = {
  isDarkTheme: false
};

export const uiReducer = (state = initialUiState, action) => {
  switch (action.type) {
    case 'toggleTheme':
      return true;
    default:
      return state;
  }
};
