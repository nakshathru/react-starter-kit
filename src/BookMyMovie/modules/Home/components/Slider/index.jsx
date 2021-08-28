import Carousel from 'react-material-ui-carousel';
import {
  Card, Grid, CardMedia, Typography,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { CarouselItem, useStyles, MediaContent } from './styledComponents';
import sliderItems from './constants';

const Slider = () => {
  const styles = useStyles();
  return (
    <Carousel className={styles.carousel} animation="slide" stopAutoPlayOnHover indicators={false}>
      {sliderItems.map((item) => (
        <CarouselItem key={uuidv4()}>
          <Card raised className={styles.banner}>
            <Grid container spacing={0} className={styles.bannerGrid}>
              <CardMedia
                className={styles.cardMedia}
                image={item.image}
                title={item.name}
              >
                <MediaContent className={styles.mediaContent}>
                  <Typography className={styles.mediaTitle}>
                    {item.name}
                  </Typography>
                  <Typography className={styles.mediaCaption}>
                    {item.caption}
                  </Typography>
                </MediaContent>
              </CardMedia>
            </Grid>
          </Card>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default Slider;
