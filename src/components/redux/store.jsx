import { configureStore, } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { bookApi,} from './rtq';
import { regApi } from './register';

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        [regApi.reducerPath]: regApi.reducer,
      },
 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, regApi.middleware, ),
});


setupListeners(store.dispatch);