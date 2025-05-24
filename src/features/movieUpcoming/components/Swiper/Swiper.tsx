import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { IMovie } from "../../../../types/types.ts";
import { POSTER_PATH } from "../../../../constants";
import { SlideWrapper, StyledAdd } from "./styled.tsx";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useFetchMovieMutate } from "./hooks/use-fetch-movie-mutate.ts";

interface IProps {
  data: IMovie[];
  isLoading: boolean;
}

export const SlickExample = ({data, isLoading}: IProps) => {
  const {mutate} = useFetchMovieMutate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, dots: false },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, dots: false},
      },
    ],
  };

  const onSaveMovie = (data: IMovie) => {
    mutate(data);
  }

  if (!isLoading) {
    return (
      <Slider {...settings}>
        {data.map((item) => (
          <SlideWrapper key={item.id}>
            <StyledAdd onClick={() => onSaveMovie(item)}>
              <PlusCircleOutlined style={{fontSize: '20px'}} />
            </StyledAdd>
            <img src={`${POSTER_PATH}${item.backdrop_path}`} alt={item.title} />
            <h3>{item.title}</h3>
          </SlideWrapper>
        ))}
      </Slider>
    );
  }
};
