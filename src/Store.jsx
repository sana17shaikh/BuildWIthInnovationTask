import {configureStore} from "@reduxjs/toolkit"
import rootReducers from "./Redux/Index"

const store = configureStore({
    reducer: rootReducers,
})

export default store