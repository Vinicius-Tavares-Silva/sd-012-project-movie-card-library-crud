import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    const { movie } = this.props;
    this.state = {
      title: movie.title,
      storyline: movie.storyline,
    };
  }

  render() {
    const { title, storyline } = this.state;
    return (
      <div data-testid="movie-card">
        <h4>{ title }</h4>
        <p>{ storyline }</p>
        <Link to="/movies/:id">
          VER DETALHES
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
