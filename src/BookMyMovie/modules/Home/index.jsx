import {
  Grid,
} from '@material-ui/core';
import MovieList from './components/MovieList';
import Slider from './components/Slider';
import { useStyles, MovieListWrapper } from './styledComponents';

const Home = () => {
  const styles = useStyles();
  console.log(styles);
  return (
    <Grid container spacing={6}>
      <Slider />
      <MovieListWrapper>
        <MovieList />
      </MovieListWrapper>
    </Grid>
  );
};

export default Home;
