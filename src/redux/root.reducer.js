import { combineReducers } from 'redux';
import { uiReducer } from './reducers/ui.reducer';

const rootReducer = combineReducers({
  ui: uiReducer
});

export default rootReducer;
