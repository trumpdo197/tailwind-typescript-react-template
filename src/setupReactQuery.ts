import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ globally default to 10 seconds
      staleTime: 1000 * 10
    }
  }
});
