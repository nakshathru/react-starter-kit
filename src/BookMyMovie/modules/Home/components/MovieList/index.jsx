// import { ListItem, ListItemText } from '@material-ui/core';
import { FixedSizeList } from 'react-window';
import useWindowWidth from '../../../../hooks/useWindowWidth';
import Movie from '../Movie';
import movies from './constants';
import useStyles from './styledComponents';

const MovieList = () => {
  const styles = useStyles();
  const width = useWindowWidth();
  return (
    <div className={styles.container}>
      <FixedSizeList height={200} width={width * 0.9} itemSize={170} itemCount={movies.length} direction="horizontal" itemData={movies} className={styles.scrollList}>
        {Movie}
      </FixedSizeList>
    </div>
  );
};

export default MovieList;
