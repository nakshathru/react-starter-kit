import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  fixedHeight: {
    height: 240,
  },
  item: {
    width: 100,
  },
  cardMedia: {
    height: '100%',
    position: 'relative',
    width: '100%',
  },
  mediaTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
  },
  mediaDescription: {
    color: 'white',
    fontSize: 6,
  },
}));

export const MediaContent = styled.div`
    bottom: 8px;
    width: 138px;
    height: 30%;
    position: absolute;
    background-color: black;
    transition: background 0.3s ease-in;
    opacity: 0.6;
    padding: 5px 10px;
}
`;
