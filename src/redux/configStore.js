import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { CarouselReducer } from './reducer/CarouselReducer';
import { QuanLyPhimReducer } from './reducer/QuanLyPhimReducer';
const rootReducer = combineReducers({
    //state app
    CarouselReducer,QuanLyPhimReducer

})
export const store = createStore(rootReducer, applyMiddleware(thunk));