import React from 'react';
import { Link } from 'react-router-dom';
//  MovieCard mostra o título e a sinopse de seu respectivo filme 
// Link com texto VER DETALHES - movies/:id (id  vai ser um parametro)

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, id } = movie;
    return (
      <div data-testid="movie-card">
        <h1>
          Title: { title }
        </h1>
        <p>
        Sinopse: { storyline }
        </p>
        <Link to={ `movies/${id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
