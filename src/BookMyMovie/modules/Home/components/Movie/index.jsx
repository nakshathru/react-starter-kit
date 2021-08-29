import { useState } from 'react';
import { ListItem, CardMedia, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useStyles, MediaContent } from './styledComponents';

const Movie = (props) => {
  const { index, style, data } = props;
  const [showContent, setShowContent] = useState(false);
  const movie = data[index];
  const styles = useStyles();
  return (
    <ListItem
      button
      style={style}
      key={index}
      onMouseOver={() => { setShowContent(true); }}
      onMouseOut={() => { setShowContent(false); }}
    >
      <CardMedia
        className={styles.cardMedia}
        image={movie.image}
        title={movie.name}
      />
      {showContent && (
      <MediaContent>
        <Typography className={styles.mediaTitle}>
          {movie.name}
        </Typography>
        <Typography className={styles.mediaDescription}>
          {movie.description}
        </Typography>
      </MediaContent>
      )}
    </ListItem>
  );
};

Movie.propTypes = {
  index: PropTypes.number,
  style: PropTypes.instanceOf(Object),
  data: PropTypes.instanceOf(Array),
};
Movie.defaultProps = {
  index: 0,
  style: {},
  data: [],
};
export default Movie;
