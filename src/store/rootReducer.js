import { combineReducers } from 'redux';
import candidateReducer from '../features/candidates/candidateSlice';

const rootReducer = combineReducers({
    candidate: candidateReducer,
});

export default rootReducer;