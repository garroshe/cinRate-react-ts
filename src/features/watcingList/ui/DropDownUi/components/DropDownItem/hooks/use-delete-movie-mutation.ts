import { useMutation } from "@tanstack/react-query";
import { movieService } from "../../../../../../../bus/movie/service.ts";


export const useDeleteMovieMutation = () => {
  const mutation = useMutation({
    mutationFn: async (id: number) => {
      return movieService.mutateMovieDelete(id);
    },
  });

  return mutation;
}