import {useQuery} from "@tanstack/react-query";
import {movieQueryKeys} from "../../../bus/movie/store.ts";
import {movieService} from "../../../bus/movie/service.ts";

import type {IResponse} from "../../../types/types.ts";

export const useFetchMovieQuery = () => {
  const {data, isFetching} = useQuery<IResponse, Error>({
    queryKey: [movieQueryKeys.moviesFetch],
    queryFn: async () => {
      return movieService.moviesFetch();
    }
  });

  return {
    data: data?.results,
    isLoading: isFetching,
  }
}