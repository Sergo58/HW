import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, createStore} from 'redux'


import {loadingReducer} from "../h10/bll/loadingReducer";
import {themeReducer} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";



const rootReducer = combineReducers({
    loading: loadingReducer,
    changeTheme:themeReducer
})

const initialGlobalState = {

    loading:{loading:false} ,
    changeTheme:{
        theme:'dark',
        background:'default'
    }

};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppStoreType);

export const ReduxStoreProviderDecorator = (storyFn: any) => (
    <Provider
        store={storyBookStore}>{storyFn()}
    </Provider>)