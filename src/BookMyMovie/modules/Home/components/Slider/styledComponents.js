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
    marginLeft: 'auto',
    backgroundColor: 'linear-gradient(to right, #030B17, rgba(0,0,0,0))',
  },
  mediaContent: {
    padding: 30,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    background: 'linear-gradient(to right, #030B17, rgba(0,0,0,0))',
    transition: 'background 0.3s ease-in',
    height: '100%',
    width: 200,
  },
  mediaTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10,
    color: 'white',
  },
  mediaCaption: {
    color: 'white',
    fontSize: 14,
  },
  bannerContent: {
    backgroundColor: '#030B17',
  },
}));

export const CarouselItem = styled.div`
  padding: 10px
`;

export const MediaContent = styled.div``;
