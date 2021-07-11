import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      movie: {
        id,
        title,
        subtitle,
        storyline },
    } = this.props;
      
    return (
  <div data-testid="movie-card">
    <h3>{title}</h3>
    <h4>{subtitle}</h4>
    <p>{storyline}</p>
    <Link to={ `/movies/${id}` }>VER DETALHES</Link>
  </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
export default MovieCard;
