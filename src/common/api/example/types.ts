export interface ExampleRequest {
  q: string;
  limit?: number;
  cursor?: string;
}

export interface ExampleResponse {
  data: {
    searchResults: SearchResult[];
    pageInfo: PageInfo;
  };
}

export interface PageInfo {
  count: number;
  hasNext: boolean;
  nextPage: string;
}

export interface SearchResult {
  name: string;
  thumbnail: string;
}
