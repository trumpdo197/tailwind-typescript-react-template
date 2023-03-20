import axios from 'axios';
import { ExampleRequest, ExampleResponse } from './types';

export const exampleApiCall = ({ q, limit = 20, cursor }: ExampleRequest) => {
  return axios.get<ExampleResponse>('/v1/search', {
    params: {
      q,
      limit,
      cursor
    }
  });
};
