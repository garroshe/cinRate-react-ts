import { StyledLabel } from "./styled.tsx";
import { SlickExample } from "./components/Swiper/Swiper.tsx";
import { useFetchMovieQuery } from "./hooks/use-fetch-movie-query.ts";
import { useTranslation } from "react-i18next";
import { Spin } from "antd";

export const MovieUpcoming = () => {
  const {data, isLoading} = useFetchMovieQuery();
  const {t} = useTranslation();
  return (
    <>
      <StyledLabel>{t('home.movieUpcoming')}</StyledLabel>
      {data !== undefined ? <SlickExample data={data} isLoading={isLoading} /> : <Spin style={{display: 'block', margin: '50px auto'}} />}
    </>
  )
}