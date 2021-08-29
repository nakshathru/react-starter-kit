import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const MovieListWrapper = styled.div`
margin-top: 50px;
width: 100%
`;

export const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
