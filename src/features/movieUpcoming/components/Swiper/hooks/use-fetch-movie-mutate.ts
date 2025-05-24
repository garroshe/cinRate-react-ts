import { useMutation } from "@tanstack/react-query";
import {movieService} from "../../../../../bus/movie/service.ts";
import type { IMovie } from "../../../../../types/types.ts";

export const useFetchMovieMutate = () => {
  const mutation = useMutation({
    mutationFn: async (movie: IMovie) => {
      return movieService.mutateMovieFetch(movie);
    },
  });

  return mutation;
}