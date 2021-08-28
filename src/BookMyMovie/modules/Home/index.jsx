import {
  Grid,
} from '@material-ui/core';
// import clsx from 'clsx';
import Slider from './components/Slider';
import useStyles from './styledComponents';

const Home = () => {
  const styles = useStyles();
  console.log(styles);
  // const fixedHeightPaper = clsx(styles.paper, styles.fixedHeight);
  return (
    <Grid container spacing={6}>
      <Slider />
      {/* <Grid item xs={12} md={8} lg={9}>
        <Paper className={fixedHeightPaper} />
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper} />
      </Grid>
      <Grid item xs={12}>
        <Paper className={styles.paper} />
      </Grid> */}
    </Grid>
  );
};

export default Home;
