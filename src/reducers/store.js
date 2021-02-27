import { createStore } from 'redux'
import { rootReducer } from './index'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = createStore(persistedReducer);
export const persistor = persistStore(store);