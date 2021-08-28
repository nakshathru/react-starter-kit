import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {
  Container,
} from '@material-ui/core';
import Header from './components/Header';
import Home from './modules/Home';
import Latest from './modules/Latest';
import { BookMyMovieWrapper, useStyles } from './styledComponent';

const BookMyMovie = () => {
  const styles = useStyles();
  return (
    <BookMyMovieWrapper>
      <Header />
      <main className={styles.content}>
        <div className={styles.appBarSpacer} />
        <Container maxWidth="xl" className={styles.container}>
          <Router>
            <Switch>
              <Route path="/latest">
                <Latest />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </Container>
      </main>

    </BookMyMovieWrapper>
  );
};

export default BookMyMovie;
