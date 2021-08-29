import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    marginLeft: 10,
  },
  scrollList: {
    overflowX: 'scroll',
    scrollbarWidth: 'none',
    '-ms-overflow-style': 'none',
    scrollbarColor: 'transparent transparent',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

export default useStyles;
