import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API = 'AIzaSyCJO6J5S13Pdm3k-fiqWujVysknh69eHLg';
const SiGN_URL = 'https://identitytoolkit.googleapis.com/v1/'; 

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




