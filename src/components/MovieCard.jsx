import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline } = movie;
    return (
      <div data-testid="movie-card">
        <img src={ imagePath } alt={ `Thumbnail de ${title}` } />
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <p>{storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
