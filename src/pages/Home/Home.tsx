import { Container, Divider } from "./styled";
import { MovieUpcoming } from "../../features/movieUpcoming/MovieUpcoming.tsx";

export const Home = () => {
    return (
      <>
        <Divider/>
        <Container>
          <MovieUpcoming/>
        </Container>
      </>
    )
}