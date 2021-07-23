import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, id, imagePath, rating } } = this.props;
    return (
      <div data-testid="movie-card" className="card">
        <img
          src={ `${imagePath}` }
          alt="imagem do filme"
          width="240px"
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{storyline}</p>
          <p className="rating">{`IMDB: ${rating}`}</p>
          <Link to={ `/movies/${id}` } className="btn btn-primary">VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape,
}.isRequired;

export default MovieCard;
