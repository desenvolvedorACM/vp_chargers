import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharger } from '../models';

const BASE_URL = 'http://localhost:3000/';

export const apiCharger = createApi({
    reducerPath: 'ApiCharger',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, mode: "no-cors" }),
    tagTypes: ['Chargers'],
    endpoints: (builder) => ({
        getChargers: builder.query<ICharger[], void>({
            query: () => 'chargers',
            providesTags: ['Chargers']
        }),
        addCharger: builder.mutation<ICharger, ICharger>({
            query: (charger) => ({
                url: 'chargers',
                method: 'POST',
                body: charger,
            }),
            invalidatesTags: ['Chargers']
        })
    })
});