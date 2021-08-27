import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './modules/Home';
import Latest from './modules/Latest';
import { BookMyMovieWrapper } from './styledComponent';

const BookMyMovie = () => (
  <BookMyMovieWrapper>
    <Header />
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
  </BookMyMovieWrapper>

);

export default BookMyMovie;
