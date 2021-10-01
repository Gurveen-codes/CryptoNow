import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': 'e9e6a1f59emsh79c7deec9121014p137123jsn18eaa88031e0',
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
	url,
	headers: apiHeaders,
})

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
	}),
})

export const { useGetCryptosQuery } = cryptoApi

// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/stats',
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'e9e6a1f59emsh79c7deec9121014p137123jsn18eaa88031e0'
//     }
//   };
