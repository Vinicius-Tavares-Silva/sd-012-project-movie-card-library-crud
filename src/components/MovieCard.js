import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, storyline } = movie;
    return (
      <BrowserRouter>
        <div data-testid="movie-card">
          Movie Card
          <h4>{ title }</h4>
          <p>{ storyline }</p>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </div>
      </BrowserRouter>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
