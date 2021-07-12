import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <h4>{ movie.title }</h4>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <p>{ movie.genre }</p>
        <nav>
          <ul>
            <li>
              <Link to={ `/movies/${movie.id}` }>VER DETALHES</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    genre: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
