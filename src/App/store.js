import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from '../Features/AllProjects/allProjectsSlice';

const rootReducer = combineReducers({
  projects: projectsReducer,
})

export const store = configureStore({ reducer: rootReducer });

export default rootReducer