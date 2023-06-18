import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FormDataType } from './slice';

export const formApi = createApi({
  reducerPath: 'formApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.sbercloud.ru/content/v1' }),
  endpoints: (builder) => ({
    postFormData: builder.mutation<unknown, FormDataType>({
      query: (data) => ({
        url: `/bootcamp/frontend`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { usePostFormDataMutation } = formApi;
