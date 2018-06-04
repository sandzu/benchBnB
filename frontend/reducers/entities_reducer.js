
import usersReducer from './users_reduce';

import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
  users: usersReducer
});

export default entitiesReducer;
