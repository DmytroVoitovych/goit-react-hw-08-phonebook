import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react';
import * as dotenv from 'dotenv';
dotenv.config();
const DATA_BASE = process.env.REACT_APP_FIREBASE_DATABASE_URL;


export const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({ baseUrl: DATA_BASE }),
    tagTypes: ['Contacts'],
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true, 
    endpoints: (builder) => ({
            getContacts: builder.query({
                query: (token) => `/test.json?auth=${token}`, 
                providesTags: (result) => {
              console.log(result);
              let resu = Object.assign([], Object.values(result || []) );
             
              return   result  ? [
                      ...resu.map(({ id }) => ({ type: 'Contacts', id })),
                      { type: 'Contacts', id: 'LIST' },
                  ]
                  : [{ type: 'Contacts', id: 'LIST' }]
                }, 
              
          
        }, ),
           addContacts: builder.mutation({
               query: (body) => ({
                url: '/test.json',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
        }),
         dellContacts: builder.mutation({
            query: (id) => ({
                url: `/test/${id}.json`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
        }),
    }),
});


export const {useGetContactsQuery, useAddContactsMutation, useDellContactsMutation } = bookApi;
