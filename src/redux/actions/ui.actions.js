import uiTypes from '../types/ui.types';

export const setLoading = loading => ({
  type: uiTypes.SET_IS_LOADING,
  payload: loading
});

export const toggleTheme = () => ({
  type: uiTypes.TOGGLE_THEME
});
