import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string, number, bool } from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, id, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt="title" />
        <h2>{ title }</h2>
        <p>{ storyline }</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: shape({
    title: string.isRequired,
    subtitle: string.isRequired,
    storyline: string.isRequired,
    rating: number.isRequired,
    imagePath: string.isRequired,
    bookmarked: bool.isRequired,
    genre: string.isRequired,
  }).isRequired,
};

export default MovieCard;
