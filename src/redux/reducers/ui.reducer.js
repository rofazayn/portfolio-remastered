import uiTypes from '../types/ui.types';

const initialUiState = {
  isLoading: true,
  isDarkTheme: false
};

export const uiReducer = (state = initialUiState, { type, payload }) => {
  switch (type) {
    case uiTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload
      };
    case uiTypes.TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };
    default:
      return state;
  }
};
