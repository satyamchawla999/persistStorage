import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import postsReducer from "./Features/posts/postsSlice";
import usersReducer from "./Features/posts/userSlice";

const persistConfig = {
    key: 'root',
    storage,
    // blacklist:['users']
}

const reducer = combineReducers({

    posts: postsReducer,
    users: usersReducer

})


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)












// import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import postsReducer from './Features/posts/postsSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, postsReducer);

// const store = configureStore({
//   reducer: postsReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };




// import {persistStore,persistReducer} from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { configureStore } from '@reduxjs/toolkit'
// import postsReducer from './Features/posts/postsSlice'

// const persistConfig = {
//   key:"root",
//   storage,
// }

// const persistReducerr = persistReducer(persistConfig,postsReducer)


//  const store = configureStore({
//   reducer: {
//     posts: persistReducerr
//   },
// })

// const persistor = persistStore(store)

// export {store,persistor}