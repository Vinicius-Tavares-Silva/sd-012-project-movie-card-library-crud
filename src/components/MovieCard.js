import React from 'react';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id} = movie;

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <h4>{storyline}</h4>
        
        <Link to={`movies/${id}`}>VER DETALHES</Link> 
      </div>
    );
  }
}

export default MovieCard;
