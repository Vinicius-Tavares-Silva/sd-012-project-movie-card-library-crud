import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id ,title, storyline, imagePath } = movie;
    return (
      <div data-testid="movie-card">
        <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
        <p className="movie-card-storyline">{storyline}</p>
        <Link to={ `/movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
