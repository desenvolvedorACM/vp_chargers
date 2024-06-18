import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharger, ILatLng } from '../models';

const BASE_URL = 'http://localhost:3000/';

export const apiCharger = createApi({
    reducerPath: 'ApiCharger',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Chargers'],
    endpoints: (builder) => ({
        getChargers: builder.query<ICharger[], void>({
            query: () => 'chargers',
            providesTags: ['Chargers']
        }),
        addCharger: builder.mutation<ICharger, ILatLng>({
            query: (position: ILatLng) => ({
                url: 'add-charger',
                method: 'POST',
                body: position,
            }),
            invalidatesTags: ['Chargers']
        })
    })
})