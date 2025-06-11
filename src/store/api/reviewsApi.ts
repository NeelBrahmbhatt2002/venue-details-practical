import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Review {
  id: string;
  name: string;
  avatar: string;
  comments: string;
  role: string;
  createdAt: string;
}

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://66fbcdd58583ac93b40d4a1f.mockapi.io/react-api/',
  }),
  endpoints: (builder) => ({
    getReviews: builder.query<Review[], void>({
      query: () => 'customer-reviews',
      transformResponse: (response: any) => {
        // Transform the API response to match our interface
        return response.map((item: any) => ({
          id: item.id,
          name: item.name || 'Anonymous',
          avatar: item.avatar || '/placeholder.svg',
          comments: item.comments || '',
          role: item.role || '',
          createdAt: item.createdAt || new Date().toISOString(),
        }));
      },
    }),
  }),
});

export const { useGetReviewsQuery } = reviewsApi;
