import { combineReducers } from 'redux';
import postListReducer from './postlistReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    posts: postListReducer,
    users: usersReducer,
});