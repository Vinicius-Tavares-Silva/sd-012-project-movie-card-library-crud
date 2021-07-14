import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, storyline, imagePath, id } } = this.props;
    return (
      <div data-testid="movie-card">
        <div>
          <img alt={ title } src={ imagePath } />
          <h1>
            { title }
          </h1>
        </div>
        <p>
          { storyline }
        </p>
        <div>
          <Link to={ `movies/${id}` }>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
