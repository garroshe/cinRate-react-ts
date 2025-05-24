import http, {getBaseApiHeaders} from "../../api/axiosConfig.ts";
import {API_KEY} from "../../constants";
import type { IMovie, IResponse } from "../../types/types.ts";

export const movieService = Object.freeze({
    moviesFetch: async (): Promise<IResponse> => {
        try {
            const res = await http.get(`/movie/popular?${API_KEY}`, {
                headers: {
                    ...getBaseApiHeaders(),
                },
            });
            return res.data ;
        } catch (err) {
            console.log(err)
            throw err;
        }
    },
    saveMovieFetch: async (): Promise<IMovie[]> => {
        try {
            const response = await fetch("http://localhost:3010/movies", {
                method: "GET",
                headers: {
                    ...getBaseApiHeaders(),
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    mutateMovieFetch: async (movie: IMovie): Promise<IResponse> => {
        try {
            const response = await fetch("http://localhost:3010/movies", {
                method: "POST",
                headers: {
                    ...getBaseApiHeaders(),
                },
                body: JSON.stringify(movie),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    mutateMovieDelete: async (id: number): Promise<IResponse> => {
        try {
            const response = await fetch(`http://localhost:3010/movies/${String(id)}`, {
                method: "DELETE",
                headers: {
                    ...getBaseApiHeaders(),
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
})