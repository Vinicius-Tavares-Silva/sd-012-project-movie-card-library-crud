import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, imagePath, title, subtitle, storyline, rating, genre } = movie;
    return (
      <div className="card" data-testid="movie-card">
        <div className="card-header">
          <img src={ imagePath } alt="Movie Cover" />
          <h2>{ title }</h2>
          <h4 className="card-subtitle">{ subtitle }</h4>
          <div className="card-body">
            <h4>{ storyline }</h4>
          </div>
          <h4 className="card-genre">{ genre }</h4>
          <h5 className="card-rating">{ rating }</h5>
        </div>
        <nav className="card-footer">
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </nav>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = ({
  movie: PropTypes.arrayOf,
}).isRequired;
