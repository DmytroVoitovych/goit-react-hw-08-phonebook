import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as dotenv from 'dotenv';
dotenv.config();
const API = process.env.REACT_APP_FIREBASE_API_KEY;
const SiGN_URL = process.env.REACT_APP_SIGN_URL; 

export const regApi = createApi({
    reducerPath: 'register',
    baseQuery: fetchBaseQuery({ baseUrl:SiGN_URL}),
    tagTypes: ['Reg'],
    endpoints: 
    (builder) => ({
            setUser: builder.mutation({
            query: (body) => ({
            url: `accounts:signUp?key=${API}`,
            method: 'post',
            body: JSON.stringify(body),
                       
            
        }), invalidatesTags: [{type: 'Reg',}]
            }),
    }),
});

export const { useSetUserMutation } = regApi;




