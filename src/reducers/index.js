import {combineReducers} from 'redux';
import categories from './categoriesReducer';
import logins from './loginReducer';

const rootReducer = combineReducers({
  categories,
  logins
});

export default rootReducer;
