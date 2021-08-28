import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles(() => ({
  carousel: {
    width: '100%',
  },
  banner: {
    height: 400,
    position: 'relative',
  },
  bannerGrid: {
    height: '100%',
    position: 'relative',
  },
  cardMedia: {
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  mediaContent: {
    position: 'absolute',
    bottom: 0,
    padding: 15,
    backgroundColor: 'black',
    color: 'white',
    opacity: 0.6,
    width: '100%',
    height: '30%',
    fontWeight: 200,
    transition: 300,
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
  mediaTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 2,
  },
  mediaCaption: {

  },
}));

export const CarouselItem = styled.div`
  padding: 10px
`;

export const MediaContent = styled.div``;
