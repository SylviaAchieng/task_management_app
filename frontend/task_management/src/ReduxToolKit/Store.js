import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";
import authReducer from './AuthSlice';
import TaskSlice from './TaskSlice';
import SubmissionSlice from './SubmissionSlice';
import taskReducer from './TaskSlice';
import submissionReducer from './SubmissionSlice'


const rootReducer = combineReducers({
    auth: authReducer,
    //task:TaskSlice,
    task: taskReducer,
    //submission: SubmissionSlice
    submission: submissionReducer
    

})

const store=configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(thunk)

})

export default store;