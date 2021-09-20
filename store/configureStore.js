import { configureStore } from '@reduxjs/toolkit'
import loaderReducer from '../src/reducers/loaderReducer'

export default configureStore({
    reducer: {
        loader: loaderReducer,
    },
})