import { StyledLabel } from "./styled.tsx";
import { SlickExample } from "./components/Swiper/Swiper.tsx";
import { useFetchMovieQuery } from "./hooks/use-fetch-movie-query.ts";

export const MovieUpcoming = () => {
  const {data, isLoading} = useFetchMovieQuery();
  return (
    <>
      <StyledLabel>Найновіші релізи</StyledLabel>
      {data !== undefined ? <SlickExample data={data} isLoading={isLoading} /> : <div>Loading...</div>}
    </>
  )
}