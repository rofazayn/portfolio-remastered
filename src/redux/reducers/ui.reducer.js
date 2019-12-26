import uiTypes from '../types/ui.types';

const initialUiState = {
  isLoading: true,
  isDarkTheme: false
};

export const uiReducer = (state = initialUiState, { type, payload }) => {
  switch (type) {
    case uiTypes.TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };
    default:
      return state;
  }
};
