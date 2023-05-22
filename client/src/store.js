import {configureStore} from '@reduxjs/toolkit'
import AllReducers from './Reducers/AllReducers';

const store = configureStore({reducer:AllReducers});

export default store;