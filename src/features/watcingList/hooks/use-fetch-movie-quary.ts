import {useQuery} from "@tanstack/react-query";
import {movieQueryKeys} from "../../../bus/movie/store.ts";
import {movieService} from "../../../bus/movie/service.ts";

import type { IMovie } from "../../../types/types";

export const useFetchMovieQuery = () => {
    const {data, isFetching, refetch} = useQuery<IMovie[], Error>({
        queryKey: [movieQueryKeys.saveMovieFetch],
        queryFn: async () => {
            return movieService.saveMovieFetch();
        },
        refetchInterval: 120000
    });

    return {
        data: data,
        isLoading: isFetching,
        refetchData: refetch,
    }
}