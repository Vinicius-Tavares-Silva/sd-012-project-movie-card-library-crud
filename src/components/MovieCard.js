import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes, { number, string } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
                <h1>{ title }</h1>
        <p>{ storyline }</p>
        <button type="button">
          <Link to={ `movies/${id}` }>
            VER DETALHES
          </Link>
        </button>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: number.isRequired,
    title: string.isRequired,
    storyline: string.isRequired,
  }).isRequired,
};

export default MovieCard;
