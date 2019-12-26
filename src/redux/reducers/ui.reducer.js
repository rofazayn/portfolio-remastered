import uiTypes from '../types/ui.types';

const initialUiState = {
  isLoading: true,
  isDarkTheme: false,
  pageHeight: '2000px'
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
    case uiTypes.SET_WRAPPER_HEIGHT:
      return {
        ...state,
        pageHeight: payload
      };
    default:
      return state;
  }
};
