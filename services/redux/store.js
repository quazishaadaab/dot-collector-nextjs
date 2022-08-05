import { configureStore } from "@reduxjs/toolkit";
import { createStore } from 'redux'
import userReducer from "./userSlice.js"
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import thunk from 'redux-thunk'
import {payload} from "../../pages/home/[home]"

 
const persistConfig={

    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)
export const store= configureStore({

reducer: persistedReducer,
devTools: process.env.NODE_ENV !== 'production',
     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

    // reducer:{


    //     user: userReducer,

    // }
})


    export const mainReducer = async(state = {  
    userid:null,
        username:null,
        userPhoto:null,
        loggedIn:true,}, action) => {

            
        //    if(action.type==='user/login'){
  
            return{
                
                userid:await payload?.userid,
                username:await payload?.username,
                userPhoto:await payload?.userPhoto,
                loggedIn:true,

            }
        // }
        };


export const store_two = configureStore({reducer: mainReducer});




 

